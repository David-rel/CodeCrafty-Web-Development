import Image from "next/image";
import Link from "next/link";
import React from "react";

function WebApps() {
  return (
    <div>
      <section className="bg-navy relative py-32 lg:py-36">
        <div className="mx-auto flex w-full flex-col gap-10 px-5 sm:px-10 md:px-12 lg:max-w-7xl lg:flex-row lg:gap-12 lg:px-5">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center lg:mx-0 lg:w-1/2 lg:max-w-none lg:flex-1 lg:items-start lg:py-7 lg:text-left xl:py-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-6xl">
              Build Outstanding
              <span className="via-gold bg-gradient-to-br from-rose-500 to-rose-700 bg-clip-text text-transparent">
                {" "}
                Web Apps{" "}
              </span>
              with Us
            </h1>
            <p className="mt-8 text-gray-700">
              Our team creates web applications that are fast, reliable, and
              user-friendly. We ensure your web app is secure, scalable, and
              tailored to your business needs.
            </p>
            <div className="flex space-x-4">
              <Link href="/build">
                <button className="mt-5 transform rounded bg-rose-700 px-6 py-2 font-bold text-white transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-rose-500">
                  Get Started
                </button>
              </Link>
              <Link href="/how">
                <button className="hover:bg-teal mt-5 transform rounded border-2 border-black bg-white px-6 py-2 font-bold text-black transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-black hover:text-white">
                  Our Process
                </button>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto flex max-w-3xl flex-1 lg:mx-0 lg:h-auto lg:w-1/2 lg:max-w-none">
            <Image
              src="/P1.jpg"
              alt="Hero image"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
        </div>
      </section>

      <div
        data-aos="fade"
        className="mx-auto max-w-7xl flex-wrap items-center pt-16"
      >
        <div className="w-full pb-6 text-center">
          <h2 className="text-xl text-gray-500"> Build Magic With Us</h2>

          <h1 className="mb-8 text-5xl font-bold md:text-7xl xl:text-8xl">
            Need More then a site?
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex w-full justify-center pb-6 lg:w-2/3">
            <Image
              src="/P2.jpg"
              alt="Design Services"
              width={600}
              height={500}
              className="rounded-md"
            />
          </div>

          <div className="w-full p-4 pr-12 font-merriweather lg:w-2/3">
            <p className="mb-4 text-xl">
              Sometimes we need something more than a website, like a complex
              web application for your company. Whether it's organization
              software for products, a team management tool, or a custom
              solution tailored to your specific needs, we can build it.
            </p>
            <p className="mb-4 text-lg text-gray-700">
              Our web applications are designed to streamline your business
              processes, enhance productivity, and improve user experience. We
              leverage the latest technologies to create robust, scalable, and
              secure web applications that can handle the demands of your
              business.
            </p>
            <p className="mb-4 text-lg text-gray-700">
              From initial consultation to deployment and maintenance, we ensure
              your web application meets all your requirements and exceeds your
              expectations. Our team works closely with you throughout the
              entire development process to ensure the final product aligns
              perfectly with your vision.
            </p>
           
            
            <div className="flex justify-center space-x-4">
              <Link href="/contact" legacyBehavior>
                <a className="inline-block rounded bg-rose-700 px-6 py-2 text-white transition-colors duration-300 hover:bg-rose-600">
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="relative flex items-center justify-center px-4 py-16 pb-40 pt-40 sm:block lg:px-8">
        <div className="relative z-10 text-center font-montserrat">
          <h2
            className="mb-4 text-3xl font-extrabold sm:text-5xl"
            data-aos="fade"
          >
            Need a Custom Web Application?
          </h2>
          <p
            className="mb-6 text-lg sm:text-xl"
            data-aos="fade"
            data-aos-delay="200"
          >
            We specialize in building custom web applications tailored to your
            specific business needs. From idea to deployment, we ensure quality
            and excellence.
          </p>
          <div className="pt-4">
            <Link href="/custom" legacyBehavior>
              <a className="inline-block rounded bg-rose-600 px-6 py-3 text-lg font-bold text-white hover:bg-rose-700 sm:text-xl">
                Contact Us
              </a>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default WebApps;
