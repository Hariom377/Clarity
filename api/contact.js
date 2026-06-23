import supabase from './db-client.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  try {
    if (req.method === 'POST') {
      const { name, email, category, message } = req.body || {};
      if (!name || typeof name !== 'string' || !name.trim())
        return res.status(400).json({ error: 'Name is required.' });
      if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email))
        return res.status(400).json({ error: 'A valid email is required.' });
      if (!message || typeof message !== 'string' || !message.trim())
        return res.status(400).json({ error: 'Message is required.' });

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
      return res.status(201).json(data);
    }

    res.status(405).json({ error: 'Method not allowed.' });
  } catch (err) {
    console.error('contact API error:', err);
    res.status(500).json({ error: err.message || 'Server error.' });
  }
}
