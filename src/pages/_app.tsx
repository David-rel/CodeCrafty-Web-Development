import { type AppType } from "next/app";
import "~/styles/globals.css";
import Head from "next/head";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import ChatPopup from "~/components/ChatPopup";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {


  useEffect(() => {
    import("aos")
      .then((Aos) => {
        Aos.init({
          duration: 2000,
          once: true,
          easing: "ease-in-out",
          mirror: false,
        });

        // Refresh AOS on window resize
        const handleResize = () => {
          Aos.refresh();
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Head>
        {/* Standard HTML Meta Tags */}
        <title>Code Crafty - Web Development & Design Experts</title>
        <meta
          name="description"
          content="Experience excellence in web design and development. Partner with Code Crafty to craft your next digital masterpiece."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logo1.png" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:url" content="https://codecrafty.dev/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Code Crafty - Web Development & Design Experts"
        />
        <meta
          property="og:description"
          content="Experience excellence in web design and development. Partner with Code Crafty to craft your next digital masterpiece."
        />
        <meta property="og:image" content="https://codecrafty.dev/banner.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="codecrafty.dev" />
        <meta property="twitter:url" content="https://codecrafty.dev/" />
        <meta
          name="twitter:title"
          content="Code Crafty - Web Development & Design Experts"
        />
        <meta
          name="twitter:description"
          content="Experience excellence in web design and development. Partner with Code Crafty to craft your next digital masterpiece."
        />
        <meta
          name="twitter:image"
          content="https://codecrafty.dev/banner.jpg"
        />

        {/* Additional tags if needed */}
      </Head>
      
      <div>
        <ChatPopup />
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
