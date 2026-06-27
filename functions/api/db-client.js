import { createClient } from '@supabase/supabase-js';

export function getSupabaseClient(env) {
  const supabaseUrl = env.VITE_SUPABASE_URL;
  // Use the secret service_role key on the backend to bypass RLS restrictions safely
  const supabaseServiceKey = env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error("Missing secure server-side configuration keys inside Cloudflare environment variables.");
  }

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });
}
