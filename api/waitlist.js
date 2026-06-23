import supabase from './db-client.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  try {
    if (req.method === 'GET') {
      const { count, error } = await supabase
        .from('waitlist')
        .select('*', { count: 'exact', head: true });
      if (error) throw error;
      return res.status(200).json({ count: count ?? 0 });
    }

    if (req.method === 'POST') {
      const { name, email, profession } = req.body || {};
      if (!name || typeof name !== 'string' || !name.trim())
        return res.status(400).json({ error: 'Name is required.' });
      if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email))
        return res.status(400).json({ error: 'A valid email is required.' });

      const { data: existing } = await supabase
        .from('waitlist')
        .select('id')
        .eq('email', email.toLowerCase())
        .limit(1);
      if (existing && existing.length > 0)
        return res.status(409).json({ error: 'You are already on the list.' });

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
      return res.status(201).json(data);
    }

    res.status(405).json({ error: 'Method not allowed.' });
  } catch (err) {
    console.error('waitlist API error:', err);
    res.status(500).json({ error: err.message || 'Server error.' });
  }
}
