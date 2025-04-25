import { createClient } from '@supabase/supabase-js';
import { supabase } from './supabaseClient.js';

export class AuthService {
  async register(email, password, first_name, last_name) {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          first_name: first_name,
          last_name: last_name,
        },
      },
    });
    return { data, error };
  }

  async login(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    return { data, error };
  }

  async getUserByToken(token) {
    const supabaseWithToken = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_ANON_KEY,
      {
        global: {
          headers: {
            Autorization: `Bearer ${token}`,
          },
        },
      },
    );
    const { data, error } = await supabaseWithToken.auth.getUser();
    return { user: data?.user, error };
  }
}
