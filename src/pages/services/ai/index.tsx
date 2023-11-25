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
            <h1 className="mb-8 text-4xl font-bold md:text-7xl lg:text-8xl">
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

            <div
              data-aos="fade-left"
              className="w-full p-4 pr-12 font-merriweather lg:w-2/3"
            >
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
                  className="rounded-full bg-rose-500  px-2 py-4 text-sm font-bold text-white hover:bg-rose-700 lg:px-4 xl:text-lg"
                >
                  BUILD YOUR DREAM SITE
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* CodeConverse AI Section */}
        <section className="my-6 rounded-lg bg-gray-100 p-6 shadow-lg">
          <div className="flex flex-col md:flex-row">
            <div className="pr-12 md:w-1/2">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Introducing CodeCatalyst AI
              </h2>
              <p className="mb-4 text-gray-700">
                Empower your business with intelligent conversations using
                CodeCatalyst AI, an advanced AI-driven chatbot designed to
                transform how businesses engage with customers. Tailored to your
                specific needs, CodeCatalyst AI is not just a product, but a
                catalyst for growth.
              </p>

              {/* Bullet Points */}
              <ul className="list-inside list-disc text-gray-700">
                <li>
                  Intuitive Interaction - Understands and responds effectively
                </li>
                <li>Seamless Integration - Works with your existing systems</li>
                <li>
                  Data-Driven Insights - Analyzes interactions for valuable
                  feedback
                </li>
                <li>24/7 Availability - Always there for your customers</li>
                <li>Custom Solutions - Adapts to your business requirements</li>
              </ul>

              <div className="pt-6 pb-10">
                <Link
                  href="/build"
                  rel="noopener noreferrer"
                  className="rounded-full bg-rose-600 px-2 py-4 text-sm font-bold text-white hover:bg-rose-700 lg:px-4 xl:text-lg"
                >
                  CONNECT WITH US
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center md:w-1/2">
              {/* Next/Image component */}
              <Image
                src="/CraftyBot.png" // Replace with the path to your image
                alt="CodeCatalyst AI"
                width={500} // Adjust the size as needed
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end font-bold text-rose-700">
            <p>
              Click the bottom right icon to start your interaction with
              CodeCatalyst AI.
            </p>
          </div>
        </section>

        <section className="my-6 rounded-lg bg-rose-100 p-6 shadow-lg">
          <div className="flex flex-col md:flex-row-reverse">
            <div className="pl-12 md:w-2/3">
              <h2 className="mb-4 text-2xl font-bold text-rose-900">
                COMING SOON: Everything CMO AI Bot
              </h2>

              <p className="mb-4 text-rose-700">
                Introducing a bot equipped with everything your company needs
                for streamlined and efficient operation. Our AI Agent is
                meticulously crafted to handle key marketing and business tasks
                with ease, freeing you to focus on other critical aspects of
                your venture. This bot is segmented into six distinct
                functionalities, each designed to enhance your business
                operations. If you&apos;re interested in early access and wish to
                participate in our alpha testing phase, please don&apos;t hesitate to
                reach out.
              </p>

              {/* Bullet Points */}
              <ul className="list-inside list-disc space-y-4 text-rose-700">
                <li>
                  Social Media Controller - Optimize your social media
                  engagement by identifying the prime posting times, crafting
                  complete posts, and consolidating all your social media
                  metrics.
                </li>
                <li>
                  Talk to Your Data - Connect with your databases to discover
                  the most effective marketing strategies, generate insightful
                  graphs, and leverage your data for business growth.
                </li>
                <li>
                  File Creation - Effortlessly generate contracts, business
                  documents, Excel sheets, and more with simple prompts.
                </li>
                <li>
                  Customer Relations - Automate your communication with
                  prospective clients and interested parties. Engage them with
                  human-like, automated emails and messaging systems.
                </li>
                <li>
                  Website Analysis - Gain insights into your website&apos;s
                  performance compared to competitors, identify optimal
                  keywords, strategies your content for enhanced Google
                  visibility, and increase click-through rates.
                </li>
                <li>
                  Market Analysis - Conduct thorough market analyses for your
                  services or products. Understand pricing trends, what
                  customers are spending on, and how to position your offerings
                  effectively.
                </li>
              </ul>

              {/* Call to Action */}
              <div className="pt-6 pb-10">
                <Link
                  href="/contact" // Update the link
                  rel="noopener noreferrer"
                  className="rounded-full bg-rose-600 px-2 py-4 text-sm font-bold text-white hover:bg-rose-700 lg:px-4 xl:text-lg"
                >
                  BECOME A TESTER
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center md:w-1/3">
              {/* Next/Image component */}
              <Image
                src="/CMObot.png" // Replace with the path to your new image
                alt="New Chatbot"
                width={500} // Adjust the size as needed
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end font-bold text-blue-700">
            {/* Additional Information or Instruction */}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
