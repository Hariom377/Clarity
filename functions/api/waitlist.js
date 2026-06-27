import { getSupabaseClient } from './db-client.js';

export async function onRequest(context) {
  const { request, env } = context;
  
  // Setup CORS Headers dynamically
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }

  try {
    const supabase = getSupabaseClient(env);

    // GET Request: Retrieve count indicators
    if (request.method === 'GET') {
      const { count, error } = await supabase
        .from('waitlist')
        .select('*', { count: 'exact', head: true });

      if (error) throw error;
      return new Response(JSON.stringify({ count: count ?? 0 }), { status: 200, headers: { ...headers, 'Content-Type': 'application/json' } });
    }

    // POST Request: Insert secure user records
    if (request.method === 'POST') {
      const body = await request.json();
      const { name, email, profession } = body || {};

      if (!name || typeof name !== 'string' || !name.trim()) {
        return new Response(JSON.stringify({ error: 'Name is required.' }), { status: 400, headers });
      }
      if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) {
        return new Response(JSON.stringify({ error: 'A valid email is required.' }), { status: 400, headers });
      }

      // Check for existing records safely
      const { data: existing } = await supabase
        .from('waitlist')
        .select('id')
        .eq('email', email.toLowerCase().trim())
        .maybeSingle();

      if (existing) {
        return new Response(JSON.stringify({ error: 'You are already on the list.' }), { status: 409, headers });
      }

      const { data, error } = await supabase
        .from('waitlist')
        .insert({
          name: name.trim(),
          email: email.toLowerCase().trim(),
          profession: (profession && typeof profession === 'string') ? profession.trim() : 'Not specified',
        })
        .select()
        .single();

      if (error) throw error;
      return new Response(JSON.stringify(data), { status: 201, headers: { ...headers, 'Content-Type': 'application/json' } });
    }

    return new Response(JSON.stringify({ error: 'Method not allowed.' }), { status: 405, headers });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message || 'Server error.' }), { status: 500, headers });
  }
}
