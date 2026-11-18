-- =============================================
-- STUDYVERSE — Supabase Setup SQL
-- Run this ONCE in Supabase SQL Editor
-- =============================================

-- 1. Create the resources table
CREATE TABLE IF NOT EXISTS public.resources (
  id               uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title            text NOT NULL,
  subject          text NOT NULL CHECK (subject IN ('Mathematics','Science','Social Science','English','Hindi','Artificial Intelligence')),
  category         text NOT NULL CHECK (category IN ('Notes','Sample Papers','Important Questions','Quick Revision','Formula Sheets')),
  file_path        text NOT NULL,
  file_url         text NOT NULL,
  file_size        bigint,
  downloads_count  integer DEFAULT 0,
  uploaded_by      uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at       timestamptz DEFAULT now()
);

-- 2. Enable Row Level Security
ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;

-- 3. RLS Policy — anyone can read (students see PDFs publicly)
CREATE POLICY "Public read access"
  ON public.resources FOR SELECT
  USING (true);

-- 4. RLS Policy — only authenticated owner can insert
CREATE POLICY "Authenticated owner can insert"
  ON public.resources FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

-- 5. RLS Policy — only the uploader can delete
CREATE POLICY "Owner can delete own resources"
  ON public.resources FOR DELETE
  USING (auth.uid() = uploaded_by);

-- 6. RLS Policy — owner can update own resources
CREATE POLICY "Owner can update own resources"
  ON public.resources FOR UPDATE
  USING (auth.uid() = uploaded_by);

-- 7. RPC function to safely increment download count
CREATE OR REPLACE FUNCTION public.increment_downloads(resource_id uuid)
RETURNS void
LANGUAGE sql
SECURITY DEFINER
AS $$
  UPDATE public.resources
  SET downloads_count = downloads_count + 1
  WHERE id = resource_id;
$$;

-- Grant execute to anon role (students can call it without login)
GRANT EXECUTE ON FUNCTION public.increment_downloads(uuid) TO anon;
GRANT EXECUTE ON FUNCTION public.increment_downloads(uuid) TO authenticated;

-- =============================================
-- 8. STORAGE BUCKET SETUP
-- =============================================
-- Run this in SQL Editor OR do it manually in
-- Supabase Dashboard > Storage > New Bucket:
--   Name: pdfs
--   Public: YES (so students can read URLs)

INSERT INTO storage.buckets (id, name, public)
VALUES ('pdfs', 'pdfs', true)
ON CONFLICT (id) DO NOTHING;

-- Storage Policy — anyone can read/download
CREATE POLICY "Public PDF read"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'pdfs');

-- Storage Policy — only authenticated users can upload
CREATE POLICY "Authenticated upload"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'pdfs' AND auth.uid() IS NOT NULL);

-- Storage Policy — only uploader can delete
CREATE POLICY "Owner delete"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'pdfs' AND auth.uid() IS NOT NULL);

-- =============================================
-- DONE! Your STUDYVERSE backend is ready.
-- =============================================
