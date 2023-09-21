import React, { useState, useEffect } from "react";
import axios from "axios"; // <-- Import AxiosError
import type { AxiosError } from "axios";

interface ErrorData {
  error?: string;
}

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [state, setState] = useState<"IDLE" | "LOADING" | "SUCCESS" | "ERROR">(
    "IDLE"
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const subscribe = () => {
    setState("LOADING");
    setErrorMessage(null);
    axios
      .post("/api/newsletter", { email })
      .then(() => {
        setState("SUCCESS");
      })
      .catch((e: AxiosError<ErrorData>) => {
        if (e.response?.data?.error) {
          setErrorMessage(e.response.data.error);
        } else {
          setErrorMessage("An unexpected error occurred.");
        }
        setState("ERROR");
      });
  };

  useEffect(() => {
    if (state === "SUCCESS") {
      const timer = setTimeout(() => {
        setState("IDLE");
      }, 2000); // Close after 2 seconds
      return () => clearTimeout(timer);
    }
  }, [state]);

  return (
    <div className="flex-none">
      <div className="mt-8 flex w-full flex-col items-center rounded-sm border border-solid border-gray-500 p-8">
        <h2 className="text-center text-3xl font-bold">
          We also have a newsletter!
        </h2>
        <p className="mt-2 w-4/5 text-center font-light leading-relaxed">
          It includes interesting stuff about tech and will arrive to your
          mailbox no more than once every 2 weeks
        </p>
        <div className="mt-5 flex w-1/2 flex-col justify-center lg:w-2/3 lg:flex-row">
          <input
            className="mb-2 w-full appearance-none rounded border border-gray-500 px-4 py-2 leading-tight text-gray-700 focus:border-gray-600 focus:outline-none lg:mb-0 lg:w-2/3"
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className={`focus:shadow-outline flex w-full rounded px-4 py-2 text-center font-bold text-black shadow focus:outline-none lg:ml-2 lg:w-1/5 ${
              state === "LOADING" ? "button-gradient-loading" : ""
            }`}
            type="button"
            disabled={state === "LOADING"}
            onClick={subscribe}
          >
            Subscribe
          </button>
        </div>
        {state === "ERROR" && (
          <p className="mt-2 w-1/2 text-red-600">{errorMessage}</p>
        )}
        {state === "SUCCESS" && (
          <p className="mt-2 w-1/2 text-green-600">Success!</p>
        )}
      </div>
    </div>
  );
};

Newsletter.displayName = "Newsletter";
export default Newsletter;
