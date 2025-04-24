import { AuthService } from '../services/authService.js';
const Auth = new AuthService();

async function registerUser(req, res, next) {
  const { email, password, firstName, lastName } = req.body;

  const registerUser = async () => {
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
      return res.status(201).json({ user: data.user });
    } catch (err) {
      console.error('Error when registering:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
  registerUser();
}

export default {
  registerUser,
};
