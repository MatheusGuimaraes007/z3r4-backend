import express from 'express';
import cors from 'cors';
import userRouter from './routes/user.js';
import userMessage from './routes/message.js';
const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', userRouter);
app.use('/message', userMessage);

export default app;
