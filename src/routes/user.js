import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.userLogin);
router.get('/get/:id', userController.getUser);

export default router;
