import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCopy, FaWhatsapp, FaSignal, FaGreaterThanEqual, FaHome } from "react-icons/fa";

export default function SocialMediaPage() {
  const socialLinks = [
        { href: "https://codecrafty.dev", icon: <FaHome />, label: "Get Started on our Website", bgColor: "bg-gray-300" },
    { href: "https://www.facebook.com/profile.php?id=100094733723225", icon: <FaFacebookF />, label: "Facebook", bgColor: "bg-blue-500" },
    { href: "https://twitter.com/CodeCrafty_", icon: <FaTwitter />, label: "Twitter", bgColor: "bg-blue-300" },
        { href: "https://www.fiverr.com/code_crafty", icon: <FaGreaterThanEqual />, label: "Fiverr", bgColor: "bg-green-400" },
    { href: "https://www.instagram.com/codecrafty_", icon: <FaInstagram />, label: "Instagram", bgColor: "bg-pink-500" },
    { href: "https://api.whatsapp.com/message/GQPLKVUDG6TDC1?", icon: <FaWhatsapp />, label: "Whats App", bgColor: "bg-green-700" },
        { href: "https://www.linkedin.com/company/code-crafty", icon: <FaLinkedinIn />, label: "LinkedIn", bgColor: "bg-blue-700" },

  ];

const handleCopyClick = () => {
  navigator.clipboard.writeText("https://codecrafty.dev/socials")
    .then(() => {
      alert("Link copied to clipboard!");
    })
    .catch(err => {
      alert("Failed to copy the link. Please try again.");
      console.error("Error copying to clipboard:", err);
    });
};



  return (
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
      <div className="absolute left-1/2 top-1/2 h-full transform -translate-x-1/2 -translate-y-1/2 overflow-y-auto md:w-full md:max-w-3xl">
        <div className="rounded bg-white shadow-lg">
          {/* Banner Image */}
          <div className="mb-4">
            <Image src="/banner.jpg" width={1000} height={200} alt="Banner" />
          </div>

          {/* Description */}
          <div className="bg-red-800 p-4 md:p-8 text-white">
            <div className="px-4 md:pl-12 md:pr-12">
              <h2 className="text-xl md:text-2xl font-semibold">
                Connect with us on social media
              </h2>
              <p className="mb-4 pt-4 text-red-300">
                We&apos;re a creative powerhouse with a passion for transforming your ideas into beautifully designed, fully functional websites.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="px-4">
            {socialLinks.map((link, idx) => (
              <div key={idx} className="py-4">
                <Link href={link.href} className="justify-left flex items-center space-x-4 pb-4">
                  <span className={`rounded-full p-3 text-3xl text-white ${link.bgColor}`}>
                    {link.icon}
                  </span>
                  <span className="font-normal text-lg md:text-xl">{link.label}</span>
                </Link>
                <hr className="mx-auto w-full border-gray-300" />
              </div>
            ))}
          </div>

          {/* Copy Link Section */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center px-4 pb-8">
            <span className="font-medium text-lg mb-4 md:mb-0">https://www.codecrafty.dev/socials</span>
            <button onClick={handleCopyClick} className="flex items-center space-x-2 text-white bg-blue-500 px-3 py-2 rounded hover:bg-blue-600">
              <FaCopy />
              <span>Copy</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
