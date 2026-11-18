/**
 * STUDYVERSE — Supabase Client & Backend Interface
 * Handles Authentication, Realtime Database (PostgreSQL), and PDF Storage.
 * Safe for GitHub Pages: Uses only public ANON key with strict Row Level Security (RLS).
 */

// ============================================================================
// 1. PROJECT CREDENTIALS
// Replace with your Project URL & Anon Key from Supabase Dashboard > Settings > API
// Or enter them directly via the Admin Console setup dialog.
// ============================================================================
const DEFAULT_SUPABASE_URL = 'https://YOUR_PROJECT_ID.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
const STORAGE_BUCKET = 'studyverse-pdfs';

// Retrieve credentials from localStorage (if configured via UI) or fallback to defaults
export function getCredentials() {
  const storedUrl = localStorage.getItem('studyverse_supabase_url');
  const storedKey = localStorage.getItem('studyverse_supabase_anon_key');
  
  return {
    url: storedUrl && storedUrl.trim() !== '' ? storedUrl.trim() : DEFAULT_SUPABASE_URL,
    anonKey: storedKey && storedKey.trim() !== '' ? storedKey.trim() : DEFAULT_SUPABASE_ANON_KEY
  };
}

export function saveCredentials(url, anonKey) {
  if (url && anonKey) {
    localStorage.setItem('studyverse_supabase_url', url.trim());
    localStorage.setItem('studyverse_supabase_anon_key', anonKey.trim());
    return true;
  }
  return false;
}

export function isConfigured() {
  const { url, anonKey } = getCredentials();
  return (
    url &&
    anonKey &&
    !url.includes('YOUR_PROJECT_ID') &&
    !anonKey.includes('YOUR_SUPABASE_ANON_KEY')
  );
}

// Global Supabase Client instance
let supabaseInstance = null;

export function getSupabase() {
  if (supabaseInstance) return supabaseInstance;

  const { url, anonKey } = getCredentials();
  if (!window.supabase) {
    console.error('Supabase library not loaded. Make sure @supabase/supabase-js CDN is included.');
    return null;
  }

  try {
    supabaseInstance = window.supabase.createClient(url, anonKey);
    return supabaseInstance;
  } catch (err) {
    console.error('Failed to initialize Supabase client:', err);
    return null;
  }
}

// Reset instance if credentials change
export function reloadSupabase() {
  supabaseInstance = null;
  return getSupabase();
}

// ============================================================================
// 2. AUTHENTICATION (Owner Admin Login / Logout)
// ============================================================================

export async function loginOwner(email, password) {
  const client = getSupabase();
  if (!client) throw new Error('Supabase client is not initialized.');

  const { data, error } = await client.auth.signInWithPassword({
    email: email.trim(),
    password: password
  });

  if (error) throw error;
  return data;
}

export async function logoutOwner() {
  const client = getSupabase();
  if (!client) return;

  const { error } = await client.auth.signOut();
  if (error) console.error('Sign-out error:', error);
}

export async function getCurrentOwner() {
  const client = getSupabase();
  if (!client) return null;

  try {
    const { data: { session }, error } = await client.auth.getSession();
    if (error || !session) return null;
    return session.user;
  } catch (err) {
    console.warn('Session check failed:', err);
    return null;
  }
}

// ============================================================================
// 3. PDF UPLOAD ENGINE (Storage + Database Record)
// ============================================================================

export async function uploadPdfResource({ file, title, subject, category, onProgress }) {
  const client = getSupabase();
  if (!client) throw new Error('Supabase client not initialized.');

  // 1. Validation
  if (!file) throw new Error('Please select a PDF file to upload.');
  if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
    throw new Error('Invalid file format. Only .pdf documents are supported.');
  }

  // 25 MB Limit
  const MAX_SIZE_BYTES = 25 * 1024 * 1024;
  if (file.size > MAX_SIZE_BYTES) {
    throw new Error('File exceeds the 25MB maximum limit. Please compress or optimize the PDF.');
  }

  if (!title || title.trim() === '') {
    throw new Error('Please provide a descriptive title for this PDF.');
  }

  // 2. Format storage file path
  // Structure: {subject}/{clean-filename}-{timestamp}.pdf
  const sanitizedSubject = subject.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const sanitizedFilename = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
  const uniqueFilePath = `${sanitizedSubject}/${Date.now()}_${sanitizedFilename}`;

  if (onProgress) onProgress(20, 'Uploading PDF to cloud storage...');

  // 3. Upload file to Supabase Storage Bucket
  const { data: storageData, error: storageError } = await client.storage
    .from(STORAGE_BUCKET)
    .upload(uniqueFilePath, file, {
      cacheControl: '3600',
      upsert: false,
      contentType: 'application/pdf'
    });

  if (storageError) {
    console.error('Storage Upload Error:', storageError);
    throw new Error(`Cloud storage upload failed: ${storageError.message}`);
  }

  if (onProgress) onProgress(65, 'Generating public download URL...');

  // 4. Retrieve Public URL
  const { data: urlData } = client.storage
    .from(STORAGE_BUCKET)
    .getPublicUrl(uniqueFilePath);

  const publicUrl = urlData.publicUrl;

  if (onProgress) onProgress(85, 'Saving resource metadata to database...');

  // 5. Get current authenticated user
  const user = await getCurrentOwner();

  // 6. Insert metadata row into `public.resources`
  const { data: dbData, error: dbError } = await client
    .from('resources')
    .insert([
      {
        title: title.trim(),
        subject: subject,
        category: category,
        file_path: uniqueFilePath,
        file_url: publicUrl,
        file_size: file.size,
        uploaded_by: user ? user.id : null
      }
    ])
    .select();

  if (dbError) {
    // If DB insert fails, cleanup orphaned uploaded file from storage
    console.error('Database Insert Error:', dbError);
    await client.storage.from(STORAGE_BUCKET).remove([uniqueFilePath]);
    throw new Error(`Database error saving resource: ${dbError.message}`);
  }

  if (onProgress) onProgress(100, 'Upload complete!');

  return dbData[0];
}

// ============================================================================
// 4. PDF DELETE ENGINE (Removes from Database AND Storage)
// ============================================================================

export async function deletePdfResource(resourceId, filePath) {
  const client = getSupabase();
  if (!client) throw new Error('Supabase client not initialized.');

  // 1. Delete file from Storage Bucket
  if (filePath) {
    const { error: storageError } = await client.storage
      .from(STORAGE_BUCKET)
      .remove([filePath]);

    if (storageError) {
      console.warn('Storage file deletion warning:', storageError.message);
    }
  }

  // 2. Delete row from Database
  const { error: dbError } = await client
    .from('resources')
    .delete()
    .eq('id', resourceId);

  if (dbError) {
    throw new Error(`Failed to delete resource record: ${dbError.message}`);
  }

  return true;
}

// ============================================================================
// 5. FETCH RESOURCES (For Students & Admin)
// ============================================================================

export async function fetchPublishedResources({ subject = 'all', category = 'all', searchQuery = '' } = {}) {
  const client = getSupabase();
  if (!client || !isConfigured()) return [];

  let query = client
    .from('resources')
    .select('*')
    .order('created_at', { ascending: false });

  if (subject && subject !== 'all') {
    query = query.eq('subject', subject);
  }

  if (category && category !== 'all') {
    query = query.eq('category', category);
  }

  if (searchQuery && searchQuery.trim() !== '') {
    query = query.ilike('title', `%${searchQuery.trim()}%`);
  }

  const { data, error } = await query;
  if (error) {
    console.error('Error fetching resources:', error);
    return [];
  }

  return data || [];
}

// Increment download counter
export async function trackDownload(resourceId, currentCount = 0) {
  const client = getSupabase();
  if (!client) return;

  try {
    await client
      .from('resources')
      .update({ downloads_count: (currentCount || 0) + 1 })
      .eq('id', resourceId);
  } catch (err) {
    console.warn('Failed to update download count:', err);
  }
}

// Helper: Format byte sizes into readable MB/KB
export function formatFileSize(bytes) {
  if (!bytes || bytes === 0) return '0 KB';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

// Helper: Relative or clean date
export function formatDate(isoString) {
  if (!isoString) return '';
  const d = new Date(isoString);
  return d.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}
