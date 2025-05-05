
# 🦊 Z3R4 - Backend Conversacional da FURIA

Este é o backend do projeto **Z3R4**, um chatbot criado para os fãs da equipe de CS:GO da FURIA. A API é responsável pelo cadastro e autenticação dos usuários, além de integrar com a OpenAI para responder perguntas sobre o time com base em dados treinados e personalizados. O projeto utiliza Supabase como banco de dados e autenticação JWT.

---

## 🎯 Objetivo

Desenvolver uma API funcional para um assistente conversacional voltado à FURIA Esports, oferecendo aos fãs um canal interativo com informações e respostas sobre o time de CS:GO, de forma segura e escalável.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript
- **Express** – Framework web para criação da API
- **Supabase** – Banco de dados e autenticação
- **OpenAI API** – Respostas com IA treinada
- **JWT (via Supabase)** – Autenticação de usuários
- **dotenv** – Gerenciamento de variáveis de ambiente
- **CORS** – Segurança para chamadas externas
- **Nodemon** – Hot reload em desenvolvimento

---

## 📦 Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/MatheusGuimaraes007/z3r4-backend.git
cd z3r4-backend
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
API_PORT=3000
OPENAI_API_KEY=your_openai_key
SUPABASE_URL=https://xyzcompany.supabase.co
SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Rode o servidor localmente

```bash
npm run dev
```

A API estará disponível em: `http://localhost:3000`

---

## 📂 Estrutura de Pastas

```
z3r4-backend/
├── src/
│   ├── controllers/
│   │   ├── messageController.js
│   │   └── userController.js
│   ├── routes/
│   │   ├── messageRoutes.js
│   │   └── userRoutes.js
│   └── server.js
├── .env.example
├── package.json
└── README.md
```

---

## 🔄 Endpoints Disponíveis

### 📌 Rotas de Usuário (`/user`)

- `POST /register` — Cadastra novo usuário
- `POST /login` — Realiza login e gera token JWT
- `GET /get/:id` — Retorna dados do usuário por ID

### 📌 Rotas de Mensagem (`/message`)

- `POST /ask` — Envia pergunta e recebe resposta do bot via OpenAI
- `GET /:id` — Retorna mensagens anteriores por ID (usuário ou sessão)

---

## 👤 Autor

Desenvolvido por **Matheus Guimarães**  
🔗 [GitHub do Projeto](https://github.com/MatheusGuimaraes007/z3r4-backend)

---

## 📄 Licença

Este projeto está licenciado sob a **ISC License** — uso livre para fins acadêmicos e experimentais.

---
