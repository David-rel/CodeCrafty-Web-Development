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

  const { thread_id, run_id } = req.query;

  if (!thread_id || !run_id) {
    console.error("Thread ID and Run ID are required", { thread_id, run_id });
    return res.status(400).json({ error: "Thread ID and Run ID are required" });
  }

  try {
    const runResult = await openai.beta.threads.runs.retrieve(
      thread_id as string,
      run_id as string
    );

    if (runResult.status === "completed") {
      const messages = await openai.beta.threads.messages.list(
        thread_id as string
      );
      const lastMessage = messages.data.find(
        (msg) => msg.run_id === run_id && msg.role === "assistant"
      );

      const messageContent =
        lastMessage?.content
          .map((contentPart) => {
            if ("text" in contentPart) {
              return contentPart.text.value;
            }
            return "";
          })
          .join("\n") || "No message found";
      return res.status(200).json({
        status: "completed",
        message: messageContent,
      });
    } else {
      return res.status(200).json({ status: runResult.status });
    }
  } catch (error) {
    console.error("Error retrieving run result", error);
    return res.status(500).json({ error: "Error retrieving run result" });
  }
}
