import { AuthService } from '../services/authService.js';
import { supabase } from '../services/supabaseClient.js';
const Auth = new AuthService();

async function registerUser(req, res, next) {
  const { email, password, firstName, lastName } = req.body;

  if (!email || !password || !firstName || !lastName) {
    return res.status(400).json({ error: 'Missing data' });
  }
  try {
    const { data, error } = await Auth.register(
      email,
      password,
      firstName,
      lastName,
    );
    if (error) {
      return res.status(400).json({ error: error.message });
    }
    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .insert({
        name: `${firstName} ${lastName}`,
        email: email,
        uuid: data.user.id,
      });
    if (profileError) {
      return res
        .status(500)
        .json({ error: 'Internal server error', errorName: profileError });
    }
    return res.status(201).json({ user: data.user });
  } catch (err) {
    console.error('Error when registering:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function userLogin(req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Missing data' });
  }
  try {
    const { data, error } = await Auth.login(email, password);
    if (error) {
      return res.status(400).json({ error: error.message });
    }
    return res.status(201).json({ user: data.user });
  } catch (err) {
    console.error('Error when registering:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function getUser(req, res, next) {
  const user_id = req.params.id;
  if (!user_id) {
    return res.status(400).json({ error: 'Missing user_id' });
  }
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('uuid', user_id)
    .single();
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  return res.status(201).json({
    id: data.id,
    uuid: data.uuid,
    name: data.name,
    email: data.email,
  });
}

export default {
  registerUser,
  userLogin,
  getUser,
};
