import express from 'express';
import messageController from '../controllers/messageController.js';

const router = express.Router();

router.post('/ask', messageController.ask);
router.get('/:id', messageController.getMessage);

export default router;
