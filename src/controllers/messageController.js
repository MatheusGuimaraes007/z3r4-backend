import OpenAI from 'openai';
import { supabase } from '../services/supabaseClient.js';
import dotenv from 'dotenv';
import infos from '../brain/info.js';
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPEN_API_KEY,
});

async function ask(req, res, next) {
  const { user_id, content } = req.body;

  if (!user_id || !content) {
    return res.status(400).json({ error: 'Missing user_id or content' });
  }
  try {
    const { data: dataUser, error: errorUser } = await supabase
      .from('messages')
      .insert({
        user_id: user_id,
        content: content,
        role: 'user',
      });
    if (errorUser) {
      return res.status(500).json({ error: errorUser.message });
    }
    const { data: dataGetUser, error: errorGetUser } = await supabase
      .from('profiles')
      .select('*')
      .eq('uuid', user_id)
      .single();
    const { data: dataHistory, error: errorHistory } = await supabase
      .from('messages')
      .select('role, content')
      .eq('user_id', user_id)
      .order('created_at', { ascending: true })
      .limit(10);
    const chatHistory = dataHistory.map((m) => ({
      role: m.role,
      content: m.content,
    }));
    const messages = [
      {
        role: 'system',
        content: `Seu nome é Z3R4. Você é o assistente oficial e carismático da torcida da FURIA Esports, focado no time de CS2.
Fale como um fã entusiasmado e orgulhoso, demonstrando conhecimento e emoção a cada resposta.
Use expressões como “vamo pra cima”, “é bala, treino e torcida”, “na moral, irmão!”, quando for natural.
Inclua o hashtag #DIADEFURIA 🐗 em respostas motivacionais ou comemorativas.
Responda com precisão, sem inventar dados, e cite nomes dos jogadores e torneios se perguntado.`,
      },
      {
        role: 'system',
        content: `Só responda coisas relacionadas ao mundo da Furia e CS:GO, qualquer outra coisa que não seja relacioando a isso, diga que não consegue tirar essa dúvida, você é voltado para o mundo de CS:GO da Furia, Não invente, Se não tiver certeza, diga que não sabe, Use apenas os dados fornecidos abaixo como referência.`,
      },
      {
        role: 'system',
        content: `Utilize o nome do torcedor quando necessário ${dataGetUser.name}`,
      },
      ...chatHistory,
      {
        role: 'system',
        content: infos.elenco,
      },
      {
        role: 'system',
        content: infos.historico,
      },
      {
        role: 'system',
        content: infos.desempenho,
      },
      {
        role: 'system',
        content: infos.campeonatos,
      },
      {
        role: 'user',
        content: content,
      },
    ];
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages,
    });
    const reply = completion.choices[0].message.content;

    const { data: dataAssistant, error: errorAssistant } = await supabase
      .from('messages')
      .insert({
        user_id: user_id,
        content: reply,
        role: 'assistant',
      });

    if (errorAssistant) {
      return res.status(400).json({ error: errorAssistant.message });
    }
    return res.status(200).json({ response: reply });
  } catch (err) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

// async function aksIa(req, res, next) {
//   const { user_id, content } = req.body;
//   if (!user_id || !content) {
//     return res.status(400).json({ error: 'Missing user_id or content' });
//   }
//   try {
//   } catch (err) {
//     return res.status(500).json({ error: 'Internal Server Error' });
//   }
// }

export default {
  ask,
};
