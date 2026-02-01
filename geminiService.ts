
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getDailyDevotional() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Gere um devocional cristão curto para hoje, incluindo um versículo bíblico (capítulo e versículo), uma breve reflexão e uma oração de encerramento. Responda em Português.",
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching devotional:", error);
    return "O Senhor é o meu pastor, nada me faltará. (Salmos 23:1). Que sua fé seja renovada hoje.";
  }
}

export async function getReadingPlan() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Crie um plano de leitura bíblica para os próximos 7 dias focado em 'Família e União'. Liste o dia e os capítulos sugeridos. Responda em Português.",
    });
    return response.text;
  } catch (error) {
    return "Plano indisponível no momento. Sugestão: Leia Gênesis 1-7.";
  }
}
