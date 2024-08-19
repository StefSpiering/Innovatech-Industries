import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY
);

export async function POST(req, res) {
  const { email, password } = await req.json();

  try {
    // Iniciar sesión
    const { user, error } = await supabase.auth.signIn({
      email,
      password,
    });

    if (error) throw error;

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
}

export async function POST_SIGN_UP(req, res) {
  const { email, password } = await req.json();

  try {
    // Registro de usuario
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;

    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
}
