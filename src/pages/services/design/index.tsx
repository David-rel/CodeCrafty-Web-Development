import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

export default function DesignPage() {
  return (
    <div>
      <Navbar />

      <div className="bg-gray-100 p-12 font-montserrat">
        <Head>
          <title>Code Crafty - Design Services</title>
        </Head>

        <div
          data-aos="fade"
          className="mx-auto max-w-7xl flex-wrap items-center"
        >
          <div className="w-full pb-6 text-center">
            <h2 className="text-xl text-gray-500">
              Firstly, People love to see, what we
            </h2>
            <h1 className="mb-8 text-5xl font-bold md:text-7xl xl:text-8xl">
              DESIGN
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="flex w-full justify-center pb-6 lg:w-2/3">
              <Image
                src="/design.jpeg" // replace with your image path
                alt="Design Services"
                width={500}
                height={500}
                className="rounded-md"
              />
            </div>

            <div className="w-full p-4 pr-12 font-merriweather lg:w-2/3">
              <p className="mb-4 text-xl">
                Nowadays, a business website has become an important tool to
                show your services and products and mark your presence online.
                After all, this can be a great revenue-generating model for a
                business owner. As a digital marketing agency, we offer the best
                mobile-first website design solutions with attractive graphics.
                Because of this, users prefer sites that are highly responsive
                on mobiles or smartphones.
              </p>
              <p className="mb-4 text-lg text-gray-700">
                Firstly, We allow the client to ask for customization of the
                website design as per his/her requirement. Undoubtedly, Code
                Crafty is one of the best website design companies, which
                provides services like Web-first website design and Graphic
                Design.
              </p>
              <p className="mb-4 text-lg text-gray-700">
                Code Crafty is also continuously working to deliver the best
                quality solutions to our clients. We have many satisfied
                clients. We also provide various other services such as Graphic
                designing, content management, digital marketing, etc.
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
      </div>

      <Footer />
    </div>
  );
}
