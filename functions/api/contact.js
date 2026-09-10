import { getSupabaseClient } from './db-client.js';

export async function onRequest(context) {
  const { request, env } = context;
  
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }

  try {
    if (request.method === 'POST') {
      const body = await request.json();
      const { name, email, category, message } = body || {};
      const supabase = getSupabaseClient(env);

      if (!name || typeof name !== 'string' || !name.trim()) {
        return new Response(JSON.stringify({ error: 'Name is required.' }), { status: 400, headers });
      }
      if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) {
        return new Response(JSON.stringify({ error: 'A valid email is required.' }), { status: 400, headers });
      }
      if (!message || typeof message !== 'string' || !message.trim()) {
        return new Response(JSON.stringify({ error: 'Message is required.' }), { status: 400, headers });
      }

      const { data, error } = await supabase
        .from('contact_messages')
        .insert({
          name: name.trim(),
          email: email.toLowerCase().trim(),
          category: category || 'General',
          message: message.trim(),
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
