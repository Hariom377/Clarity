import { createClient } from '@supabase/supabase-js';

export function getSupabaseClient(env) {
  // Checks both the contextual environment block and the global runtime block
  const supabaseUrl = env.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const supabaseServiceKey = env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error(`Missing secure server-side configuration keys inside Cloudflare environment variables. URL: ${!!supabaseUrl}, Key: ${!!supabaseServiceKey}`);
  }

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });
}
