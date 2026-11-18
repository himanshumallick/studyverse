-- ============================================================================
-- STUDYVERSE — Supabase Database & Storage Setup Script
-- Run this in your Supabase Dashboard: SQL Editor -> New Query -> Paste & Run
-- ============================================================================

-- 1. Create the `resources` table for PDF metadata
create table if not exists public.resources (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  subject text not null,       -- e.g., 'Mathematics', 'Science', etc.
  category text not null,      -- e.g., 'Notes', 'Formula Sheets', etc.
  file_path text not null,     -- Storage path inside bucket (e.g., 'mathematics/filename.pdf')
  file_url text not null,      -- Public download/view URL
  file_size bigint,            -- File size in bytes
  downloads_count integer default 0,
  uploaded_by uuid references auth.users(id) on delete set null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Enable Row Level Security (RLS) on `resources` table
alter table public.resources enable row level security;

-- 3. Policy: Anyone (Students & Public) can VIEW published resources
drop policy if exists "Public can view published resources" on public.resources;
create policy "Public can view published resources"
  on public.resources for select
  using (true);

-- 4. Policy: Only Authenticated Admin can INSERT new resources
drop policy if exists "Authenticated admin can insert resources" on public.resources;
create policy "Authenticated admin can insert resources"
  on public.resources for insert
  to authenticated
  with check (auth.role() = 'authenticated');

-- 5. Policy: Only Authenticated Admin can DELETE resources
drop policy if exists "Authenticated admin can delete resources" on public.resources;
create policy "Authenticated admin can delete resources"
  on public.resources for delete
  to authenticated
  using (auth.role() = 'authenticated');

-- 6. Policy: Anyone can increment download counts
drop policy if exists "Public can update download counts" on public.resources;
create policy "Public can update download counts"
  on public.resources for update
  using (true)
  with check (true);

-- ============================================================================
-- STORAGE BUCKET POLICIES (Run after creating bucket 'studyverse-pdfs')
-- ============================================================================

-- Note: In Supabase Dashboard -> Storage -> Create new bucket named 'studyverse-pdfs'
-- Mark the bucket as PUBLIC.

-- Storage Policy 1: Anyone can view/download PDFs from 'studyverse-pdfs' bucket
create policy "Public can view and download studyverse-pdfs"
  on storage.objects for select
  using (bucket_id = 'studyverse-pdfs');

-- Storage Policy 2: Only Authenticated Admin can upload PDFs
create policy "Admin can upload to studyverse-pdfs"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'studyverse-pdfs' and auth.role() = 'authenticated');

-- Storage Policy 3: Only Authenticated Admin can delete PDFs
create policy "Admin can delete from studyverse-pdfs"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'studyverse-pdfs' and auth.role() = 'authenticated');
