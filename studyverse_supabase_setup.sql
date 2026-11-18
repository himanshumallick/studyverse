
-- =====================================================
-- STUDYVERSE - SUPABASE DATABASE SETUP
-- Owner: mallickhimansusekhar1@gmail.com
-- =====================================================

-- 1. CREATE RESOURCES TABLE

CREATE TABLE IF NOT EXISTS public.resources (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    subject text NOT NULL CHECK (
        subject IN (
            'Mathematics',
            'Science',
            'Social Science',
            'English',
            'Hindi',
            'Artificial Intelligence'
        )
    ),
    category text NOT NULL,
    file_path text NOT NULL,
    file_url text NOT NULL,
    file_size bigint,
    downloads_count integer NOT NULL DEFAULT 0,
    uploaded_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
    created_at timestamptz NOT NULL DEFAULT now()
);

-- 2. CATEGORY VALIDATION

ALTER TABLE public.resources
DROP CONSTRAINT IF EXISTS resources_category_check;

ALTER TABLE public.resources
ADD CONSTRAINT resources_category_check
CHECK (
    category IN (
        'Notes',
        'Cheat Sheets',
        'Formula Sheets',
        'Sample Papers',
        'Important Questions',
        'Quick Revision'
    )
);

-- 3. ENABLE SECURITY

ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;

-- 4. REMOVE OLD POLICIES

DROP POLICY IF EXISTS "Public read access" ON public.resources;
DROP POLICY IF EXISTS "Authenticated owner can insert" ON public.resources;
DROP POLICY IF EXISTS "Owner can delete own resources" ON public.resources;
DROP POLICY IF EXISTS "Owner can update own resources" ON public.resources;
DROP POLICY IF EXISTS "Owner can insert resources" ON public.resources;
DROP POLICY IF EXISTS "Owner can delete resources" ON public.resources;
DROP POLICY IF EXISTS "Owner can update resources" ON public.resources;

-- 5. PUBLIC READ ACCESS

CREATE POLICY "Public read access"
ON public.resources
FOR SELECT
TO anon, authenticated
USING (true);

-- 6. OWNER-ONLY INSERT

CREATE POLICY "Owner can insert resources"
ON public.resources
FOR INSERT
TO authenticated
WITH CHECK (
    lower(coalesce(auth.jwt() ->> 'email', '')) =
    'mallickhimansusekhar1@gmail.com'
    AND uploaded_by = auth.uid()
);

-- 7. OWNER-ONLY DELETE

CREATE POLICY "Owner can delete resources"
ON public.resources
FOR DELETE
TO authenticated
USING (
    lower(coalesce(auth.jwt() ->> 'email', '')) =
    'mallickhimansusekhar1@gmail.com'
);

-- 8. OWNER-ONLY UPDATE

CREATE POLICY "Owner can update resources"
ON public.resources
FOR UPDATE
TO authenticated
USING (
    lower(coalesce(auth.jwt() ->> 'email', '')) =
    'mallickhimansusekhar1@gmail.com'
)
WITH CHECK (
    lower(coalesce(auth.jwt() ->> 'email', '')) =
    'mallickhimansusekhar1@gmail.com'
    AND uploaded_by = auth.uid()
);

-- 9. TABLE PERMISSIONS

GRANT SELECT ON public.resources TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.resources TO authenticated;

-- 10. CREATE PUBLIC PDF STORAGE BUCKET

INSERT INTO storage.buckets (id, name, public)
VALUES ('pdfs', 'pdfs', true)
ON CONFLICT (id) DO NOTHING;

-- 11. REMOVE OLD STORAGE POLICIES

DROP POLICY IF EXISTS "Public PDF read" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated upload" ON storage.objects;
DROP POLICY IF EXISTS "Owner delete" ON storage.objects;
DROP POLICY IF EXISTS "Owner PDF upload" ON storage.objects;
DROP POLICY IF EXISTS "Owner PDF delete" ON storage.objects;

-- 12. PUBLIC PDF ACCESS

CREATE POLICY "Public PDF read"
ON storage.objects
FOR SELECT
TO anon, authenticated
USING (bucket_id = 'pdfs');

-- 13. OWNER-ONLY PDF UPLOAD

CREATE POLICY "Owner PDF upload"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
    bucket_id = 'pdfs'
    AND lower(coalesce(auth.jwt() ->> 'email', '')) =
    'mallickhimansusekhar1@gmail.com'
);

-- 14. OWNER-ONLY PDF DELETE

CREATE POLICY "Owner PDF delete"
ON storage.objects
FOR DELETE
TO authenticated
USING (
    bucket_id = 'pdfs'
    AND lower(coalesce(auth.jwt() ->> 'email', '')) =
    'mallickhimansusekhar1@gmail.com'
);

-- 15. DOWNLOAD COUNTER FUNCTION

CREATE OR REPLACE FUNCTION public.increment_downloads(resource_id uuid)
RETURNS void
LANGUAGE sql
SECURITY DEFINER
SET search_path = ''
AS $function$
    UPDATE public.resources
    SET downloads_count = downloads_count + 1
    WHERE id = resource_id;
$function$;

REVOKE ALL ON FUNCTION public.increment_downloads(uuid) FROM PUBLIC;

GRANT EXECUTE ON FUNCTION public.increment_downloads(uuid)
TO anon, authenticated;

-- =====================================================
-- STUDYVERSE DATABASE SETUP COMPLETE
-- =====================================================
