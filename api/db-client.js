import { createClient } from '@supabase/supabase-js';
import { triggerRestore } from './db-wake.js';

// Swapped process.env with import.meta.env to allow Vite to map Cloudflare Dashboard variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("CRITICAL: Supabase keys are completely uninitialized inside browser context.");
}

const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    global: {
      fetch: async (url, options) => {
        const res = await fetch(url, options);
        if (!res.ok && res.status >= 500) triggerRestore();
        return res;
      },
    },
  }
);

export default supabase;
