import React, { useState } from "react";
import axios from "axios"; // <-- Import AxiosError
import Image from "next/image";
import type { AxiosError } from "axios";


interface ErrorData {
  error?: string;
}

type NewsletterPopupProps = {
  onClose: () => void;
  isVisible: boolean;
};

export default function NewsletterPopup({
  onClose,
  isVisible,
}: NewsletterPopupProps) {
  const [email, setEmail] = useState<string>(""); // <-- Specify string type
  const [state, setState] = useState<"IDLE" | "LOADING" | "SUCCESS" | "ERROR">(
    "IDLE"
  ); // <-- Specify string literal types
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const subscribe = () => {
    setState("LOADING");
    setErrorMessage(null);
    axios
      .post("/api/newsletter", { email })
      .then(() => setState("SUCCESS"))
      .catch((e: AxiosError<ErrorData>) => {
        // <-- Specify the error type
        if (e.response?.data?.error) {
          // <-- Use optional chaining
          setErrorMessage(e.response.data.error);
        } else {
          setErrorMessage("An unexpected error occurred.");
        }
        setState("ERROR");
      });
  };

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 z-40 bg-gray-400 bg-opacity-50"></div>
      <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform">
        <div
          className={`mx-auto max-w-xl rounded-lg bg-white p-4 shadow-lg transition-all duration-500 ${
            isVisible ? "animate-slideInFromBottom" : ""
          }`}
        >
          <div className="mx-auto max-w-xl rounded-lg p-4 shadow-lg">
            <div
              role="alert"
              className="container mx-auto flex w-11/12 max-w-xl justify-center"
            >
              <div className="relative w-full rounded pb-8 pt-10">
                <div className="flex flex-col items-center px-4 md:px-12">
                  <Image
                    src="/banner.jpg"
                    alt="Newsletter Illustration"
                    width={500}
                    height={500}
                  />
                  <p className="mt-6 text-center text-base font-bold text-rose-700 sm:text-lg md:text-2xl md:leading-6">
                    Subscribe to our newsletter
                  </p>
                  <p className="mt-2 text-center text-xs leading-5 text-gray-600 sm:mt-4 sm:text-sm">
                    It includes interesting stuff about tech and will arrive to
                    your mailbox no more than once every 2 weeks
                  </p>
                  <div className="mt-4 flex w-full items-center sm:mt-6">
                    <div className="w-full rounded border border-gray-200 bg-gray-50 ">
                      <input
                        className="w-full bg-transparent py-3 pl-4 text-sm leading-none text-gray-600 placeholder-gray-600 focus:outline-none"
                        placeholder="Enter your email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <button
                      className="ml-2 rounded bg-rose-700 px-3 py-3 hover:bg-opacity-80 focus:outline-none dark:bg-rose-600"
                      type="button"
                      disabled={state === "LOADING"}
                      onClick={subscribe}
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.62163 7.76261C1.18663 7.61761 1.18247 7.38345 1.62997 7.23428L17.5358 1.93261C17.9766 1.78595 18.2291 2.03262 18.1058 2.46428L13.5608 18.3693C13.4358 18.8101 13.1816 18.8251 12.995 18.4068L9.99997 11.6668L15 5.00011L8.3333 10.0001L1.62163 7.76261Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                  {state === "ERROR" && (
                    <p className="mt-2 w-1/2 text-red-600">{errorMessage}</p>
                  )}
                  {state === "SUCCESS" && (
                    <p className="mt-2 w-1/2 text-green-600">Success!</p>
                  )}
                </div>
                <div
                  onClick={handleCloseModal}
                  className="absolute right-0 top-0 m-3 cursor-pointer text-gray-800 transition duration-150 ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Close"
                    className="icon icon-tabler icon-tabler-x"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
