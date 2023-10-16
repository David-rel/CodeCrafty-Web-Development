import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Head from "next/head";
import Link from "next/link";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidgets?(): void;
    };
  }
}

export default function IndexPage() {
  const [isOnline, setIsOnline] = useState(true); // default to true
  const [isLoading, setIsLoading] = useState(false);

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
        {isLoading ? (
          <div className="flex min-h-screen items-center justify-center">
            <span className="animate-spin text-4xl">🔄</span>
          </div>
        ) : isOnline ? (
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/diego_g/introduction?primary_color=008080&text_color=000000&background_color=ffffff&back=1&month=2023-10"
            style={{ minWidth: "320px", height: "700px" }}
          ></div>
        ) : (
          <div>
            <p className="font-bold">
              It seems you&apos;re offline. Please connect to Wi-Fi to view the
              scheduling widget.
            </p>
            <p>
              Alternatively, you can{" "}
              <Link href="https://calendly.com/diego_g">
                <a className="text-blue-600 underline">click here</a>
              </Link>{" "}
              to go directly to the Calendly link.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
