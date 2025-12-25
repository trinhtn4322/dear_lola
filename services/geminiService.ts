
import { GoogleGenAI, Type } from "@google/genai";
import { WishRequest } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateFishWish = async (params: WishRequest): Promise<string> => {
  const prompt = `Write a cute Christmas wish for my friend ${params.recipientName}. 
  The theme MUST be "Cute Fish" and "Christmas" (Fishmas). 
  Their personality is ${params.personality} and the tone should be ${params.theme}. 
  Use aquatic puns like "fin-tastic", "sea-son's greetings", "o-fish-ally", etc. 
  Keep it short and heartwarming. Use emojis related to fish and Christmas. Language: Vietnamese.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 1,
        topP: 0.95,
      },
    });

    return response.text || "Chúc mừng Giáng Sinh Fin-tastic nhé! Hy vọng bạn có một mùa lễ hội thật rực rỡ dưới đại dương!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Chúc bạn một mùa Giáng Sinh an lành và ngập tràn niềm vui như những chú cá nhỏ bơi lội!";
  }
};
