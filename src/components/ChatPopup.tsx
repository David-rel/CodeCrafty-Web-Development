// components/ChatPopup.js
import { useState, useEffect, useMemo } from "react";
import { FaRobot } from "react-icons/fa";

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      message:
        "Welcome to The Code Crafty Question Bot. Click a question get an answer.",
      type: "system",
    },
  ]);

const questions = useMemo(
  () => [
    {
      q: "What is Code Crafty?",
      a: "Code Crafty is a web development and design company specializing in AI integration, web maintenance, and SEO. We offer affordable websites that align with modern-day aesthetics.",
    },
    {
      q: "Who runs Code Crafty?",
      a: "Code Crafty is run by a team of four members: David Fales (CEO), Diego Gutierrez-Raghunath (Marketing and Sales Executive), Grant Rechtin (Software Developer and Tester), and Connor Mohr (Business Executive).",
    },
    {
      q: "How do we create websites?",
      a: "We create websites by focusing on modern design, development, and AI integration. Our team collaborates to ensure the site meets the client's needs and maintains a contemporary look and feel.",
    },
    {
      q: "How long does a website take?",
      a: "The timeline for website creation varies based on the project's complexity and requirements. Please reach out to us directly for a more accurate estimate.",
    },
    {
      q: "What are the main goals of Code Crafty?",
      a: "Our main goals are to deliver quality web solutions at affordable prices, integrate AI where beneficial, and ensure that our outputs are up-to-date and cater to the clients' requirements.",
    },
    {
      q: "Where do I go if I have questions?",
      a: "You can reach out to any of our team members via email. David Fales, our CEO, would be a great starting point at davidfales@codecrafty.dev.",
    },
    {
      q: "Can I work for/with you?",
      a: "We're always open to collaborations and potential team members. Please send us an email with your proposal or resume for consideration.",
    },
    {
      q: "What does web development/design mean?",
      a: "Web development/design involves creating and styling websites. It encompasses everything from the website's layout and graphics to its functionality and user experience.",
    },
    {
      q: "What exactly does AI Integration into websites mean?",
      a: "AI Integration in websites involves embedding Artificial Intelligence tools or functionalities. This can improve user experience, automate tasks, or provide personalized content and recommendations to users.",
    },
    {
      q: "What does SEO and website maintenance mean?",
      a: "SEO, or Search Engine Optimization, is the practice of optimizing a website to rank higher on search engines. Website maintenance involves updating, fixing, and ensuring the site runs smoothly post-launch.",
    },
    {
      q: "How much does a website cost?",
      a: "The cost of a website varies based on its complexity, features, and the services required. Please contact us for a detailed quote tailored to your needs.",
    },
  ],
  []
);


  const [availableQuestions, setAvailableQuestions] = useState([...questions]);
  const [randomQuestions, setRandomQuestions] = useState(getRandomQuestions());

  function getRandomQuestions() {
    const shuffledQuestions = availableQuestions.sort(
      () => 0.5 - Math.random()
    );
    return shuffledQuestions.slice(0, 3);
  }

  const handleQuestionClick = (question: string, answer: string) => {
    setChatMessages([...chatMessages, { message: question, type: "question" }]);
    setAvailableQuestions(availableQuestions.filter((q) => q.q !== question));

    setTimeout(() => {
      setChatMessages((prevChatMessages) => [
        ...prevChatMessages,
        { message: answer, type: "answer" },
      ]);
      if (availableQuestions.length > 0) {
        setRandomQuestions(getRandomQuestions());
      }
    }, 1000);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (availableQuestions.length <= questions.length - 3) {
      setAvailableQuestions([...questions]);
    }
  }, [availableQuestions, questions]);

  return (
    <div className="fixed bottom-5 right-5 z-30 hidden md:flex lg:flex">
      {isOpen ? (
        <div
          className="flex flex-col rounded-lg bg-white shadow-lg"
          style={{ width: "30rem", height: "36rem" }} // Custom width and height
        >
          {" "}
          <div className="flex items-center justify-between border-b border-gray-300 p-4">
            <h3 className="font-merriweather text-lg font-semibold">
              Code Crafty Question Bot
            </h3>
            <button onClick={toggleChat} className="z-10 focus:outline-none">
              X
            </button>
          </div>
          <div className="flex-1 overflow-y-scroll p-4 font-montserrat">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`my-2 rounded-lg p-2 ${
                  msg.type === "question"
                    ? "bg-rose-600 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {msg.message}
              </div>
            ))}
          </div>
          <div className="border-t border-gray-300 px-4 py-2">
            {availableQuestions.length > 0 ? (
              randomQuestions.map((question, index) => (
                <button
                  key={index}
                  className="mb-2 w-full rounded-lg border border-rose-500 bg-white px-3 py-1 text-sm text-rose-500 focus:outline-none"
                  onClick={() => handleQuestionClick(question.q, question.a)}
                >
                  {question.q}
                </button>
              ))
            ) : (
              <div className="mb-2 w-full px-3 py-1 text-center text-sm text-gray-500">
                That&apos;s all I have to answer. Bye!
              </div>
            )}
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-rose-500 text-white focus:outline-none"
        >
          <FaRobot className="text-4xl" />
        </button>
      )}
    </div>
  );
};

export default ChatPopup;
