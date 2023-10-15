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
  const [isModalVisible, setIsModalVisible] = useState(false); // Initially set to false

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalVisible(true); // Show the modal after 30 seconds
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer if the component is unmounted
  }, []);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    // Importing and initializing AOS
    import("aos")
      .then((Aos) => {
        Aos.init({ duration: 2000 });
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <SessionProvider session={session}>
      <Head>
        <title>Code Crafty - Web Development & Design Services</title>
        <meta
          name="description"
          content="Code Crafty offers premium web development and design services, tailoring custom websites for individuals and businesses of all sizes. Turn your vision into a digital reality with us."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="./logo1.png" />

        {/* Open Graph / Social Media */}
        <meta
          property="og:title"
          content="Code Crafty - Web Development & Design Experts"
        />
        <meta
          property="og:description"
          content="Experience excellence in web design and development. Partner with Code Crafty to craft your next digital masterpiece."
        />
        <meta property="og:image" content="https://codecrafty.dev/banner.jpg" />
        <meta
          property="og:image:alt"
          content="A representation of Code Crafty's premium services"
        />
        <meta property="og:url" content="https://codecrafty.dev" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Canonical */}
        <link rel="canonical" href="https://codecrafty.dev" />
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
