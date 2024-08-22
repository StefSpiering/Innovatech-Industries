import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY
);

export async function POST(req, res) {
  const { email, password, first_name, last_name } = await req.json();

  try {
    // Check if user already exists
    const { data: existingUser, error: fetchError } = await supabase
      .from('users')
      .select('id')
      .eq('email', email)
      .single();
    
    if (fetchError && fetchError.code !== 'PGRST116') {
      throw fetchError;
    }
    
    if (existingUser) {
      return res.status(409).json({ message: 'It looks like you already have an account. Login now!' });
    }

    // Create user
    const { user, error: signupError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signupError) throw signupError;

    // Store additional user info
    await supabase
      .from('users')
      .insert([{ email, first_name, last_name, supabase_id: user.id }]);

    return res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
}
