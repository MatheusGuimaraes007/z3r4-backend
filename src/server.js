import http from 'http';
import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();

const server = http.createServer(app);
server.listen(process.env.API_PORT || 3308, () => {
  console.log('Servidor Iniciado');
});
