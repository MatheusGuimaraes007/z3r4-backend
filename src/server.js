import http from 'http';
import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3308;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
