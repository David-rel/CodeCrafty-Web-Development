import { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY as string,
  defaultHeaders: { "OpenAI-Beta": "assistants=v2" },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const assistantId = process.env.NEXT_PUBLIC_OPENAI_ASSISTANT as string;
    if (!assistantId) {
      throw new Error("OPENAI_ASSISTANT environment variable is not set");
    }



    const assistant = await openai.beta.assistants.retrieve(assistantId);
    const thread = await openai.beta.threads.create();



    return res.status(200).json({ assistant, thread });
  } catch (error) {
    console.error("Error retrieving OpenAI information", error);
    return res
      .status(500)
      .json({ error: "Error retrieving OpenAI information" });
  }
}
