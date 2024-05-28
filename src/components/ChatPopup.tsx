import { useState, useEffect } from "react";
import { FaRobot, FaSpinner } from "react-icons/fa";

type Thread = {
  created_at: number;
  id: string;
  metadata: {
    object: string;
  };
};

type Tool = {
  type: string;
};

type Assistant = {
  created_at: number;
  description: string | null;
  file_ids: string[];
  id: string;
  instructions: string;
  metadata: {
    model: string;
    name: string;
    object: string;
  };
  tools: Tool[];
};

type AssistantData = {
  assistant: Assistant;
  thread: Thread;
};

type BotResponseData = {
  status: string;
  message?: string;
};

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [myAssistant, setMyAssistant] = useState<AssistantData | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [runId, setRunId] = useState<string | null>(null);

  useEffect(() => {
    const fetchAssistant = async () => {
      try {
        const res = await fetch("/api/getOpenAiInfo");
        if (!res.ok) {
          throw new Error("Failed to fetch assistant");
        }
        const data = (await res.json()) as AssistantData;
        setMyAssistant(data);
      } catch (error) {
        console.error("Failed to fetch assistant:", error);
      }
    };

    fetchAssistant().catch((error) => {
      console.error("Failed to fetch assistant:", error);
    });
  }, []);

  const fetchRunResult = async (threadId: string, runId: string) => {
    try {
      const response = await fetch(
        `/api/getRunResults?thread_id=${threadId}&run_id=${runId}`
      );
      const responseData = (await response.json()) as BotResponseData;

      if (responseData.status === "completed" && responseData.message) {
        setMessages((prevMessages) => [
          ...prevMessages,
          `Bot: ${responseData.message}`,
        ]);
      } else if (responseData.status !== "completed") {
        setTimeout(() => fetchRunResult(threadId, runId), 2000);
      }
    } catch (error) {
      console.error("Error fetching run result:", error);
    }
  };

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") {
      console.log("No message to send");
      return;
    }

    setMessages((prevMessages) => [...prevMessages, `You: ${newMessage}`]);
    setNewMessage("");
    setIsLoading(true);

    if (!myAssistant) {
      console.error("Assistant data is not available");
      setIsLoading(false);
      return;
    }

    const { assistant, thread } = myAssistant;
    if (!assistant?.id || !thread?.id) {
      console.error("Invalid assistant or thread data", { assistant, thread });
      setIsLoading(false);
      return;
    }

    const payload = {
      message: newMessage,
      botInfo: {
        assistant,
        thread,
      },
    };


    try {
      const response = await fetch("/api/sendBot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });


      if (!response.ok) {
        console.error("API response is not OK:", response.statusText);
        throw new Error(`API responded with status ${response.status}`);
      }

      const responseData = (await response.json()) as { runId: string };

      setRunId(responseData.runId);
      fetchRunResult(thread.id, responseData.runId);
    } catch (error) {
      console.error("Error sending message to bot:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5 right-5 z-30">
      {isOpen ? (
        <div
          className="flex flex-col rounded-lg bg-white shadow-lg"
          style={{ width: "21rem", height: "30rem" }}
        >
          <div className="flex items-center justify-between border-b border-gray-300 p-4">
            <h3 className="font-merriweather text-lg font-semibold">
              The CodeCatalyst AI
            </h3>
            <button onClick={toggleChat} className="z-10 focus:outline-none">
              X
            </button>
          </div>

          <div className="flex-1 overflow-y-scroll p-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`my-2 rounded-lg p-2 ${
                  msg.startsWith("You:")
                    ? "bg-gray-200 text-black"
                    : "bg-rose-700 text-white"
                }`}
              >
                {msg}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-center p-2">
                <FaSpinner className="animate-spin" />
              </div>
            )}
          </div>

          {/* Message Input */}
          <div className="border-t border-gray-300 p-4">
            <div className="flex">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="mr-2 flex-grow rounded border p-2"
                placeholder="Type a message"
              />
              <button
                onClick={handleSendMessage}
                className="rounded border-2 border-black bg-rose-500 p-2 hover:bg-rose-700"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-500 text-white focus:outline-none"
        >
          <FaRobot className="text-4xl" />
        </button>
      )}
    </div>
  );
};

export default ChatPopup;
