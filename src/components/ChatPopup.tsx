import { useState, useEffect } from "react";
import { FaRobot, FaSpinner } from "react-icons/fa"; // Import FaSpinner for the loading indicator

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
  Thread: Thread;
};

type BotResponseData = {
  message: string;
  // include other properties that the response might have
};

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [myAssistant, setMyAssistant] = useState<AssistantData | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAssistant = async () => {
      try {
        const res = await fetch("/api/openai");
        const data = (await res.json()) as AssistantData;
        setMyAssistant(data);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch assistant:", error);
      }
    };

    fetchAssistant().catch((error) => {
      console.error("Failed to fetch assistant:", error);
    });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    (async () => {
      if (newMessage.trim() !== "") {
        setMessages((prevMessages) => [...prevMessages, `You: ${newMessage}`]);
        setNewMessage("");
        setIsLoading(true);
        if (myAssistant && myAssistant.assistant && myAssistant.Thread) {
          const payload = {
            message: newMessage,
            botInfo: {
              assistant: myAssistant.assistant,
              Thread: myAssistant.Thread,
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

            const responseData = (await response.json()) as BotResponseData;
            if (responseData && responseData.message) {
              setMessages((prevMessages) => [
                ...prevMessages,
                `Bot: ${responseData.message}`,
              ]);
            } else {
              console.error("No response from bot");
            }
          } catch (error) {
            console.error("Error sending message to bot:", error);
          } finally {
            setIsLoading(false);
          }
        }
      }
    })().catch((error) => {
      // Handle any errors that occur during the fetch
      console.error("Error occurred during message submission:", error);
    });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5 right-5 z-30">
      {isOpen ? (
        <div
          className="flex flex-col rounded-lg bg-white shadow-lg"
          style={{ width: "30rem", height: "36rem" }}
        >
          <div className="flex items-center justify-between border-b border-gray-300 p-4">
            <h3 className="font-merriweather text-lg font-semibold">
              Code Crafty Question Bot
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

          {/* Message Input Form */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-gray-300 p-4"
          >
            <div className="flex">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="mr-2 flex-grow rounded border p-2"
                placeholder="Type a message"
              />
              <button type="submit" className="rounded border p-2">
                Send
              </button>
            </div>
          </form>
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
