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

  useEffect(() => {
    setIsOnline(navigator.onLine);

    // Handle online/offline events
    function updateOnlineStatus() {
      setIsOnline(navigator.onLine);
    }

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    if (isOnline) {
      const calendlyScriptId = "calendly-script";
      let script = document.getElementById(
        calendlyScriptId
      ) as HTMLScriptElement;

      if (!script) {
        script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        script.id = calendlyScriptId;
        script.onload = function () {
          setTimeout(() => {
            if (window.Calendly && window.Calendly.initInlineWidgets) {
              window.Calendly.initInlineWidgets();
            }
          }, 500); // 500ms delay, adjust as needed
        };

        document.body.appendChild(script);
      } else if (window.Calendly) {
        // If script is already loaded and Calendly is defined on window
        if (window.Calendly?.initInlineWidgets) {
          window.Calendly.initInlineWidgets();
        }
      }
    }

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, [isOnline]);

  return (
    <>
      <Head>
        <title>Code Crafty - Contact</title>
      </Head>
      <Navbar />

      <main>
        {isOnline ? (
          // Calendly inline widget
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/diego_g"
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
              <Link
                href="https://calendly.com/diego_g"
                className="text-blue-600 underline"
              >
                click here
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
