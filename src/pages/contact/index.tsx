import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Head from "next/head";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidgets?(): void;
    };
  }
}

export default function IndexPage() {
  const [isOnline, setIsOnline] = useState(true); // default to true

  useEffect(() => {
    setIsOnline(navigator.onLine);

    function updateOnlineStatus() {
      setIsOnline(navigator.onLine);
    }

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  useEffect(() => {
    if (
      window.Calendly &&
      typeof window.Calendly.initInlineWidgets === "function"
    ) {
      window.Calendly.initInlineWidgets();
    }
  }, [isOnline]);

  return (
    <>
      <Head>
        <title>Code Crafty - Contact</title>
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
      </Head>
      <Navbar />

      <main>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/diego_g/introduction?primary_color=008080&text_color=000000&background_color=ffffff&back=1&month=2023-10"
          style={{ minWidth: "320px", height: "700px" }}
        ></div>
      </main>
      <div>
        <div className="container mx-auto pt-16">
          <div className="lg:flex">
            <div className="rounded-tl rounded-tr bg-blue-700 py-16 lg:w-2/5 xl:w-2/5 xl:rounded-bl xl:rounded-tr-none">
              <div className="mx-auto px-8 xl:w-5/6 xl:px-0">
                <h1 className="pb-4 text-3xl font-bold text-white xl:text-4xl">
                  Get in touch
                </h1>
                <p className="pb-8 text-xl font-normal leading-relaxed text-white lg:pr-4">
                  Got a question about us? Are you interested in partnering with
                  us? Have some suggestions or just want to say Hi? Just contact
                  us. We are here to asset you.
                </p>
                <div className="flex items-center pb-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-phone-call"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                      <path d="M15 7a2 2 0 0 1 2 2" />
                      <path d="M15 3a6 6 0 0 1 6 6" />
                    </svg>
                  </div>
                  <p className="pl-4 text-base text-white">
                    +1 (720) 299 - 4804
                  </p>
                </div>
                <div className="flex items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-mail"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#FFFFFF"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x={3} y={5} width={18} height={14} rx={2} />
                      <polyline points="3 7 12 13 21 7" />
                    </svg>
                  </div>
                  <p className="pl-4 text-base text-white">
                    davidfales@codecrafty.dev
                  </p>
                </div>
                <p className="pt-10 text-lg tracking-wide text-white">
                  8270 east otero circle <br />
                  Centennial, Colorado
                </p>
              </div>
            </div>
            <div className="h-full rounded-br rounded-tr bg-gray-200 pb-5 pt-5 lg:w-3/5 xl:w-3/5 xl:pl-0 xl:pr-5">
              <form
                id="contact"
                className="rounded-br rounded-tr bg-white px-8 py-4"
                action="https://formspree.io/f/mbjvqylo"
                method="POST"
              >
                <h1 className="mb-6 text-4xl font-extrabold text-gray-800">
                  Enter Details
                </h1>
                <div className="mb-6 block w-full flex-wrap justify-between xl:flex">
                  <div className="mb-6 w-2/4 max-w-xs xl:mb-0">
                    <div className="flex flex-col">
                      <label
                        htmlFor="full_name"
                        className="mb-2 text-sm font-semibold leading-tight tracking-normal text-gray-800"
                      >
                        Full Name
                      </label>
                      <input
                        required
                        id="full_name"
                        name="full_name"
                        type="text"
                        className="flex h-10 w-64 items-center rounded border border-gray-300 pl-3 text-sm font-normal focus:border focus:border-blue-700 focus:outline-none"
                        placeholder="Mark Zuckerberg"
                      />
                    </div>
                  </div>
                  <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                    <div className="flex flex-col">
                      <label
                        htmlFor="email"
                        className="mb-2 text-sm font-semibold leading-tight tracking-normal text-gray-800"
                      >
                        Email
                      </label>
                      <input
                        required
                        id="email"
                        name="email"
                        type="email"
                        className="flex h-10 w-64 items-center rounded border border-gray-300 pl-3 text-sm font-normal focus:border focus:border-blue-700 focus:outline-none"
                        placeholder="davidfales@codecrafty.dev"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-wrap">
                  <div className="w-2/4 max-w-xs">
                    <div className="flex flex-col">
                      <label
                        htmlFor="phone"
                        className="mb-2 text-sm font-semibold leading-tight tracking-normal text-gray-800"
                      >
                        Phone
                      </label>
                      <input
                        required
                        id="phone"
                        name="phone"
                        type="tel"
                        className="flex h-10 w-64 items-center rounded border border-gray-300 pl-3 text-sm font-normal focus:border focus:border-blue-700 focus:outline-none"
                        placeholder="7202994804"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6 w-full">
                  <div className="flex flex-col">
                    <label
                      className="mb-2 text-sm font-semibold text-gray-800"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      placeholder="Your message here..."
                      name="message"
                      className="mb-4 resize-none rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border focus:border-blue-700"
                      rows={8}
                      id="message"
                      defaultValue={""}
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded bg-blue-700 px-8 py-3 text-sm leading-6 text-white transition duration-150 ease-in-out hover:bg-blue-600 focus:outline-none"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
