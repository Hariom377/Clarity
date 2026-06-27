import { createClient } from '@supabase/supabase-js';

export function getSupabaseClient(env) {
  // Read secure variables injected into the Cloudflare Dashboard
  const supabaseUrl = env.VITE_SUPABASE_URL;
  const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase configuration keys inside Cloudflare environment environment variable array.");
  }

  return createClient(supabaseUrl, supabaseAnonKey);
}
