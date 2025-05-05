# Z3R4 Backend

Serviço backend em **Node.js + Express** para o projeto **Z3R4**, fornecendo APIs REST e comunicação em tempo real por WebSockets para o chat interativo dos fãs da **FURIA Esports**.

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **Express** (`^5.1.0`)
- **ws** (`^8.18.1`) para WebSockets
- **@supabase/supabase-js** (`^2.49.4`) para integração com Supabase
- **OpenAI** (`^4.96.0`) para funcionalidades de IA
- **CORS** (`^2.8.5`)
- **Dotenv** (`^16.5.0`) para gerenciamento de variáveis de ambiente
- **Nodemon** (`^3.1.10`) como dependência de desenvolvimento

## 🚀 Scripts Disponíveis

- `npm run dev` — inicia o servidor em modo de desenvolvimento (hot-reload via nodemon).
- `npm start` — inicia o servidor em modo de produção.


## 🌐 Configuração de Ambiente

Crie um arquivo `.env` na raiz com as seguintes variáveis:

    ```dotenv
    # Porta do servidor
    PORT=3000
    
    # Supabase
    SUPABASE_URL=https://xyz.supabase.co
    SUPABASE_KEY=your_supabase_key
    
    # OpenAI
    OPENAI_API_KEY=your_openai_key
    
    # Outras variáveis conforme necessidade

##📡 Deploy no Railway


