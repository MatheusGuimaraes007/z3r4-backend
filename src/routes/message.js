import express from 'express';
import messageController from '../controllers/messageController.js';

const router = express.Router();

router.post('/ask', messageController.ask);

export default router;
