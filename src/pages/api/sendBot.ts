import { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  defaultHeaders: { "OpenAI-Beta": "assistants=v2" },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }


  const { botInfo, message } = req.body;

  if (!botInfo || !botInfo.thread?.id || !botInfo.assistant?.id) {
    console.error("Invalid botInfo object provided", { botInfo });
    return res.status(400).json({ error: "Invalid botInfo object provided" });
  }

  const thread_id = botInfo.thread.id;

  try {
    await openai.beta.threads.messages.create(thread_id, {
      role: "user",
      content: message,
    });
    const run = await openai.beta.threads.runs.create(thread_id, {
      assistant_id: botInfo.assistant.id,
      model: "gpt-3.5-turbo", // Replace this with the appropriate model
    });
    return res.status(200).json({ runId: run.id });
  } catch (error) {
    console.error("Error starting OpenAI run", error);
    return res.status(500).json({ error: "Error starting OpenAI run" });
  }
}
