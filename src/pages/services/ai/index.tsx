import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

export default function DesignPage() {
  return (
    <div>
      <Navbar />

      <div className="bg-white p-12 font-montserrat">
        <Head>
          <title>Code Crafty - AI Integration</title>
        </Head>

        <div className="mx-auto max-w-7xl flex-wrap items-center">
          <div className="w-full pb-6 text-center">
            <h2 className="text-xl text-gray-500">
              AI to help with your business
            </h2>
            <h1 className="mb-8 text-5xl font-bold md:text-7xl lg:text-8xl">
              AI INTEGRATION
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div
              data-aos="fade-right"
              className="flex w-full justify-center pb-6 lg:w-2/3"
            >
              <Image
                src="/aiimg.png" // replace with your image path
                alt="Design Services"
                width={500}
                height={500}
                className="rounded-md"
              />
            </div>

            <div data-aos="fade-left" className="w-full p-4 pr-12 lg:w-2/3 font-merriweather">
              <p className="mb-4 text-xl">
                At Code Crafty, we are at the forefront of AI integration,
                harnessing the power of cutting-edge technologies to enhance
                user experiences. Our chatbots are designed to answer queries
                promptly, ensuring customers get the information they need
                without delay. Furthermore, by gathering user data, we are able
                to anticipate and better predict the desires and needs of our
                clientele.
              </p>
              <p className="mb-4 text-lg text-gray-700">
                This proactive approach not only streamlines our services but
                also provides invaluable insights into user behavior. By
                understanding why users click on certain features or services,
                we can tailor our offerings to better align with their
                expectations.
              </p>
              <p className="mb-4 text-lg text-gray-700">
                Our primary goal is to make interactions seamless and intuitive.
                The chatbots deployed by Code Crafty are more than just digital
                assistants; they are data-driven tools aimed at refining our
                understanding of user preferences. Over time, this iterative
                feedback loop ensures our platform evolves in sync with the
                needs of our audience.
              </p>

              <div className="pt-4">
                <Link
                  href="/build"
                  rel="noopener noreferrer"
                  className="mr-4 rounded-full bg-rose-500 px-6 py-4 text-xl font-bold text-white hover:bg-rose-700"
                >
                  BUILD YOUR DREAM SITE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
