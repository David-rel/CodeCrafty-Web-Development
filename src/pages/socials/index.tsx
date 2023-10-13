import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCopy,
  FaWhatsapp,
  FaGreaterThanEqual,
  FaHome,
  FaBell,
} from "react-icons/fa";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

export default function SocialMediaPage() {
  const socialLinks = [
    {
      href: "https://codecrafty.dev",
      icon: <FaHome />,
      label: "Get Started on our Website",
      bgColor: "bg-gray-300",
    },
    {
      href: "https://www.facebook.com/profile.php?id=100094733723225",
      icon: <FaFacebookF />,
      label: "Facebook",
      bgColor: "bg-blue-500",
    },
    {
      href: "https://twitter.com/CodeCrafty_",
      icon: <FaTwitter />,
      label: "Twitter",
      bgColor: "bg-blue-300",
    },
    {
      href: "https://www.fiverr.com/code_crafty",
      icon: <FaGreaterThanEqual />,
      label: "Fiverr",
      bgColor: "bg-green-400",
    },
    {
      href: "https://www.instagram.com/codecrafty_",
      icon: <FaInstagram />,
      label: "Instagram",
      bgColor: "bg-pink-500",
    },
    {
      href: "https://api.whatsapp.com/message/GQPLKVUDG6TDC1?",
      icon: <FaWhatsapp />,
      label: "Whats App",
      bgColor: "bg-green-700",
    },
    {
      href: "https://www.linkedin.com/company/code-crafty",
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
      bgColor: "bg-blue-700",
    },
    {
      href: "https://www.threads.net/@codecrafty_",
      icon: <FaBell />,
      label: "Threads",
      bgColor: "bg-black",
    },
  ];

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText("https://codecrafty.dev")
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        alert("Failed to copy the link. Please try again.");
        console.error("Error copying to clipboard:", err);
      });
  };

  return (
    <div>
      <Head>
        <title>Code Crafty - Socials</title>
      </Head>
      <Navbar />
      <div className="relative min-h-screen bg-gray-100">
        {/* Background Image */}
        <Image
          src="/banner.jpg"
          layout="fill"
          objectFit="cover"
          className="opacity-50 blur-md"
          alt="Background"
        />

        {/* Central Content */}
        <div className="absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 transform overflow-y-auto md:w-full md:max-w-4xl">
          <div className="rounded bg-white shadow-lg">
            {/* Banner Image */}
            <div className="mb-4">
              <Image src="/banner.jpg" width={1000} height={200} alt="Banner" />
            </div>

            {/* Description */}
            <div className="bg-red-800 p-4 text-white md:p-8">
              <div className="px-4 md:pl-12 md:pr-12">
                <h2 className="text-xl font-semibold md:text-2xl">
                  Connect with us on social media
                </h2>
                <p className="mb-4 pt-4 text-red-300">
                  We&apos;re a creative powerhouse with a passion for
                  transforming your ideas into beautifully designed, fully
                  functional websites.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="px-4">
              {socialLinks.map((link, idx) => (
                <div key={idx} className="py-4">
                  <Link
                    href={link.href || ""}
                    className="justify-left flex items-center space-x-4 pb-4"
                  >
                    <span
                      className={`rounded-full p-3 text-3xl text-white ${link.bgColor}`}
                    >
                      {link.icon}
                    </span>
                    <span className="text-lg font-normal md:text-xl">
                      {link.label}
                    </span>
                  </Link>
                  <hr className="mx-auto w-full border-gray-300" />
                </div>
              ))}
            </div>

            {/* Copy Link Section */}
            <div className="mt-8 flex flex-col items-center justify-between px-4 pb-8 md:flex-row">
              <span className="mb-4 text-lg font-medium md:mb-0">
                https://www.codecrafty.dev
              </span>
              <button
                onClick={handleCopyClick}
                className="flex items-center space-x-2 rounded bg-blue-500 px-3 py-2 text-white hover:bg-blue-600"
              >
                <FaCopy />
                <span>Copy</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
