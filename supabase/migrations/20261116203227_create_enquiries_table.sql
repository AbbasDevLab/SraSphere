/*
# Create enquiries table for website contact form

1. New Tables
- `enquiries`: stores project enquiries submitted through the public contact form.
  - `id` (uuid, primary key, auto-generated)
  - `full_name` (text, not null) - submitter's name
  - `email` (text, not null) - business email for reply
  - `company_name` (text, not null) - company or organization
  - `country` (text, not null) - country of the business
  - `service` (text, not null) - service of interest (one of the site's service options)
  - `budget` (text, not null) - estimated budget range selected by the user
  - `project_description` (text, not null) - free-form project details
  - `status` (text, not null, default 'new') - internal triage status: new | in_review | closed
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `enquiries`.
- The table contains leads submitted by anonymous visitors: visitors may INSERT only,
  and must never be able to read, modify or delete other people's enquiries.
- Grant INSERT only to `anon` + `authenticated` (the website has no sign-in, so the
  anon role performs the insert).
- No SELECT/UPDATE/DELETE policies for anon or authenticated: the website never reads
  enquiries from the browser, so they stay write-only for clients. The site owner reads
  them via the Supabase dashboard (service role bypasses RLS).

3. Notes
- Single-tenant, no-auth schema: no user_id column, no auth.uid() usage.
- `status` has a CHECK constraint limited to the three triage values.
- Server-side validation of enum-like fields (service, budget) also happens in the
  insert policy for defense in depth.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  company_name text NOT NULL,
  country text NOT NULL,
  service text NOT NULL,
  budget text NOT NULL,
  project_description text NOT NULL,
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'in_review', 'closed')),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON enquiries TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries"
ON enquiries FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(full_name) BETWEEN 2 AND 120
  AND full_name ~ '[a-zA-Z]'
  AND email ~* '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'
  AND char_length(company_name) BETWEEN 2 AND 200
  AND char_length(country) BETWEEN 2 AND 100
  AND char_length(project_description) BETWEEN 20 AND 5000
  AND service IN (
    'Website Development',
    'E-commerce Development',
    'Business Software',
    'ERP / CRM / POS',
    'Custom Software',
    'Automation / AI',
    'Other'
  )
  AND budget IN (
    'Under $500',
    '$500-$1,000',
    '$1,000-$3,000',
    '$3,000-$5,000',
    '$5,000+'
  )
);