import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Head from "next/head";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import NewsletterPopup from "~/components/NewsletterPopup";
import ChatPopup from "~/components/ChatPopup";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalVisible(true);
    }, 30000);
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    import("aos")
      .then((Aos) => {
        Aos.init({ duration: 2000 });
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <SessionProvider session={session}>
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
      {isModalVisible && (
        <NewsletterPopup isVisible={isModalVisible} onClose={closeModal} />
      )}
      <div>
        <ChatPopup />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
