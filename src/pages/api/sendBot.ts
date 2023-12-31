// pages/api/sendBot.ts
import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
import { env } from "~/env.mjs";

interface BotRequestBody {
  botInfo: {
    assistant: { id: string };
    Thread: { id: string };
  };
  message: string;
}

const openai = new OpenAI({ apiKey: env.OPENAI_KEY });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {

        const requestBody = req.body as BotRequestBody;
    // Log the received data
    const assistant_id = requestBody.botInfo.assistant.id;
    const thread_id = requestBody.botInfo.Thread.id;
    const message = requestBody.message;

    await openai.beta.threads.messages.create(thread_id, {
      role: "user",
      content: message,
    });

    const run = await openai.beta.threads.runs.create(thread_id, {
      assistant_id: assistant_id,
    });

    let runStatus = await openai.beta.threads.runs.retrieve(thread_id, run.id);

    while (runStatus.status !== "completed") {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      runStatus = await openai.beta.threads.runs.retrieve(thread_id, run.id);
    }

    // Get the last assistant message from the messages array
    const messages = await openai.beta.threads.messages.list(thread_id);

    // Find the last message for the current run
    // Find the last message for the current run
    // Find the last message for the current run
    const lastMessageForRun = messages.data
      .filter(
        (message) => message.run_id === run.id && message.role === "assistant"
      )
      .pop();

    // If an assistant message is found, console.log() it
    if (
      lastMessageForRun &&
      lastMessageForRun.content &&
      lastMessageForRun.content[0] &&
      "text" in lastMessageForRun.content[0] &&
      lastMessageForRun.content[0].text.value
    ) {
    }

    // Send a response back to the client
    if (
      lastMessageForRun &&
      lastMessageForRun.content &&
      lastMessageForRun.content[0] &&
      "text" in lastMessageForRun.content[0]
    ) {
      res
        .status(200)
        .json({ message: lastMessageForRun.content[0].text.value });
    } else {
      res.status(200).json({ message: "No message found" });
    }
  } else {
    // Handle any non-POST requests
    res.setHeader("Allow", ["POST"]);
    // Use the nullish coalescing operator to provide a default value if req.method is undefined
    res.status(405).end(`Method ${req.method ?? "UNKNOWN"} Not Allowed`);
  }
}
