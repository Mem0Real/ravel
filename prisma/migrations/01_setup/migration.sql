-- The Shadow database (used for migrations) does not have the `auth.jwt()` function set up, 
-- so we need to stub it here not to get an error when we try to create the RLS policies later.

CREATE SCHEMA IF NOT EXISTS auth;

DO $$
BEGIN
  CREATE FUNCTION auth.jwt()
  RETURNS jsonb 
  LANGUAGE SQL
  AS 'SELECT NULL::json;';
EXCEPTION
  WHEN duplicate_function 
  THEN NULL;
END; $$;

-- Setup rights and permissions in both the shadow and main database.
GRANT USAGE ON SCHEMA public TO postgres, anon, authenticated, service_role;

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO postgres, anon, authenticated, service_role;
GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public TO postgres, anon, authenticated, service_role;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO postgres, anon, authenticated, service_role;

ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO postgres, anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON FUNCTIONS TO postgres, anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO postgres, anon, authenticated, service_role;

-- Set up RLS policy for __prisma_migrations so that users can never access it.
CREATE TABLE IF NOT EXISTS _prisma_migrations (_ INT); -- may not exist in shadow DB
ALTER TABLE "_prisma_migrations" ENABLE ROW LEVEL SECURITY;

-- RLS policies for prisma migrations
CREATE POLICY "Users can't access this table" ON "_prisma_migrations"
AS PERMISSIVE FOR ALL TO public
WITH CHECK (false);