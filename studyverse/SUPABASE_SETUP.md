# STUDYVERSE — Supabase Backend & PDF Storage Setup Guide

This guide walks you through connecting your **free Supabase account** to STUDYVERSE in less than 5 minutes.

Once configured, you will be able to:
1. Log in to your private **Owner Admin Console** (`admin.html`).
2. Upload real PDF files with titles, subjects, and categories.
3. Automatically store the PDFs securely in cloud storage.
4. Have them immediately appear on the student website with working **View** and **Download** buttons.

---

## 🚀 Step 1: Create a Free Supabase Project

1. Go to [https://supabase.com](https://supabase.com) and click **Start your project** (or sign in with GitHub).
2. Click **New project**.
3. Choose your organization, give your project a name (e.g. `studyverse`), set a strong database password, and choose a region close to you (e.g. `Mumbai (ap-south-1)`).
4. Click **Create new project** and wait ~1 minute for it to initialize.

---

## 🗄️ Step 2: Create the Database Table & Security Policies

1. In your Supabase Dashboard, look at the left sidebar and click on **SQL Editor** (icon with `>_`).
2. Click **New query**.
3. Open the file [`D:\studyverse\supabase_setup.sql`](file:///D:/studyverse/supabase_setup.sql) in VS Code or copy the SQL code below:

```sql
-- 1. Create the resources table
create table if not exists public.resources (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  subject text not null,
  category text not null,
  file_path text not null,
  file_url text not null,
  file_size bigint,
  downloads_count integer default 0,
  uploaded_by uuid references auth.users(id) on delete set null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Enable Row Level Security (RLS)
alter table public.resources enable row level security;

-- 3. Students & Public can VIEW all resources
create policy "Public can view published resources"
  on public.resources for select
  using (true);

-- 4. Only Authenticated Owner can INSERT resources
create policy "Authenticated admin can insert resources"
  on public.resources for insert
  to authenticated
  with check (auth.role() = 'authenticated');

-- 5. Only Authenticated Owner can DELETE resources
create policy "Authenticated admin can delete resources"
  on public.resources for delete
  to authenticated
  using (auth.role() = 'authenticated');

-- 6. Anyone can update download count
create policy "Public can update download counts"
  on public.resources for update
  using (true)
  with check (true);
```

4. Paste it into the SQL Editor and click **Run** (or press <kbd>Ctrl</kbd> + <kbd>Enter</kbd>). You should see `Success. No rows returned`.

---

## 📦 Step 3: Create the Storage Bucket for PDFs

1. In your Supabase Dashboard left sidebar, click **Storage** (bucket icon).
2. Click **New bucket**.
3. Set the Bucket name to exactly:
   ```text
   studyverse-pdfs
   ```
4. **CRITICAL**: Turn the toggle for **Public bucket** to **ON** (so students can view and download the PDFs).
5. Click **Save**.

### Add Storage Policies (if not done in SQL):
1. In the SQL Editor, paste and run this:

```sql
create policy "Public can view and download studyverse-pdfs"
  on storage.objects for select
  using (bucket_id = 'studyverse-pdfs');

create policy "Admin can upload to studyverse-pdfs"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'studyverse-pdfs' and auth.role() = 'authenticated');

create policy "Admin can delete from studyverse-pdfs"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'studyverse-pdfs' and auth.role() = 'authenticated');
```

---

## 👤 Step 4: Create Your Owner / Admin Login

Because public registration is disabled for security:
1. In Supabase Dashboard, click **Authentication** (person icon) in the left sidebar.
2. Click **Users** &rarr; **Add user** &rarr; **Create user**.
3. Enter your owner email (e.g. `admin@studyverse.in` or your personal email) and a strong password.
4. Toggle **Auto Confirm User?** to **ON** (so you can log in immediately without waiting for an email confirmation).
5. Click **Create user**.

---

## 🔑 Step 5: Copy Your Project URL & Anon Key

1. In Supabase Dashboard, click **Project Settings** (gear icon at the bottom left) &rarr; **API**.
2. Look at **Project URL** (e.g. `https://abcdefghijklm.supabase.co`). Copy it.
3. Look at **Project API keys** &rarr; copy the **`anon` `public`** key.
   *(Never use or share the `service_role` secret key!)*

---

## ⚙️ Step 6: Connect to STUDYVERSE

You have two very easy ways to connect your keys:

### Option A: Direct in the Browser (No Code Editing Needed!)
1. Open `admin.html` in your browser (or at `https://your-username.github.io/studyverse/admin.html`).
2. Click the **⚙️ Keys** button at the top right (or click **Configure** on the banner).
3. Paste your **Project URL** and **Anon Key**.
4. Click **Save & Connect**.
5. Log in with the email and password you created in Step 4!

### Option B: In Code (`js/supabase-config.js`)
Open [`D:\studyverse\js\supabase-config.js`](file:///D:/studyverse/js/supabase-config.js) and replace:
```javascript
const DEFAULT_SUPABASE_URL = 'https://YOUR_PROJECT_ID.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```
with your actual Supabase Project URL and Anon Key.

---

## 🎯 Verification & How It Works

1. Open `admin.html` &rarr; Enter your Owner Email & Password &rarr; Click **Authenticate as Owner**.
2. Fill in:
   - Title: `Real Numbers - 2025 Board Special Notes`
   - Subject: `Mathematics`
   - Category: `Notes`
   - Select any sample `.pdf` file from your laptop.
   - Click **Publish PDF to Website**.
3. You will see a real animated progress bar:
   `Uploading PDF to cloud storage... -> Saving resource metadata... -> Upload complete! 100%`
4. Now open `index.html` (the student site) and scroll to **Student Resource Library**:
   - Filter by `Mathematics` &rarr; Your uploaded PDF will appear instantly with working **View PDF** and **Download PDF** buttons!
