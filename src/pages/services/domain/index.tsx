import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

function WebApps() {
  return (
    <div>
      <Navbar />
      <section className="bg-navy relative py-32 lg:py-36">
        <div className="mx-auto flex w-full flex-col gap-10 px-5 sm:px-10 md:px-12 lg:max-w-7xl lg:flex-row lg:gap-12 lg:px-5">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center lg:mx-0 lg:w-1/2 lg:max-w-none lg:flex-1 lg:items-start lg:py-7 lg:text-left xl:py-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-6xl">
              Deploy your site with ease, using our
              <span className="via-gold bg-gradient-to-br from-rose-500 to-rose-700 bg-clip-text text-transparent">
                {" "}
                Domains and Hosting{" "}
              </span>
            </h1>
            <p className="mt-8 text-gray-700">
              It can be impossible to find good hosting and domain services. We
              offer a variety of services to help you get your site up and
              running at no extra cost when you get a website with us.
            </p>
            <div className="flex space-x-4">
              <Link href="/start">
                <button className="mt-5 transform rounded bg-rose-700 px-6 py-2 font-bold text-white transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-rose-500">
                  Get Started
                </button>
              </Link>
              <Link href="/process">
                <button className="hover:bg-teal mt-5 transform rounded border-2 border-black bg-white px-6 py-2 font-bold text-black transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-black hover:text-white">
                  Our Process
                </button>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto flex max-w-3xl flex-1 lg:mx-0 lg:h-auto lg:w-1/2 lg:max-w-none">
            <Image
              src="/about_person.jpeg"
              alt="Hero image"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
        </div>
      </section>

      <div className="bg-navy items-start justify-center gap-6 p-4 md:p-10">
        {/* Service Block Left */}
        <h2 className="bg-navy mb-10 text-center text-3xl font-bold text-white md:mb-20 md:text-5xl">
          <span className="from-gold-light via-gold to-gold-dark bg-gradient-to-br bg-clip-text text-transparent">
            Analytics
          </span>
          ,{" "}
          <span className="from-gold-light via-gold to-gold-dark bg-gradient-to-br bg-clip-text text-transparent">
            Marketing{" "}
          </span>
          , and{" "}
          <span className="from-gold-light via-gold to-gold-dark bg-gradient-to-br bg-clip-text text-transparent">
            {" "}
            Support{" "}
          </span>
          Services
        </h2>
        <div className="flex flex-col items-start justify-center gap-6 pb-10 md:flex-row">
          <div className="flex flex-col items-center gap-6 md:items-start">
            <div className="mb-8 flex h-64 w-64 flex-col items-center rounded-sm bg-white p-4 text-center shadow-lg md:h-72 md:w-80">
              <Image
                src="/doamin1.svg"
                alt="CRM & Analytics"
                width={75}
                height={50}
              />
              <h3 className="mt-4 text-base font-semibold md:text-lg">
                Deploy your site everywhere
              </h3>
              <p className="pt-4 text-sm md:text-base">
                Deploy your site to all the major platforms and get the best
                analytics and marketing tools to help you grow your site.
              </p>
            </div>
            <div className="flex h-64 w-64 flex-col items-center rounded-sm bg-white p-4 text-center shadow-lg md:h-72 md:w-80">
              <Image
                src="/domain2.svg"
                alt="Referral Tools"
                width={75}
                height={50}
              />
              <h3 className="mt-4 text-base font-semibold md:text-lg">
                Connect a domain to our services
              </h3>
              <p className="pt-4 text-sm md:text-base">
                Connect your domain to our services to get the best out of your
                site. Through our deployment services we can help you get your
                site up and running.
              </p>
            </div>
          </div>

          {/* Central Phone Image */}
          <div className="hidden flex-col items-center justify-center md:flex md:items-start">
            <Image
              src="/phone.png"
              alt="Phone Display"
              width={200}
              height={200}
              layout="fixed"
              className="md:h-auto md:w-auto"
            />
          </div>

          {/* Service Block Right */}
          <div className="flex flex-col items-center gap-6 md:items-start">
            <div className="mb-8 flex h-64 w-64 flex-col items-center rounded-sm bg-white p-4 text-center shadow-lg md:h-72 md:w-80">
              <Image
                src="/deploy.svg"
                alt="Sales Funnel Creator"
                width={75}
                height={50}
              />
              <h3 className="mt-4 text-base font-semibold md:text-lg">
                Deploy for free
              </h3>
              <p className="pt-4 text-sm md:text-base">
                Our team will help you deploy your site and connect it to our
                services for free. No hastle and no extra cost.
              </p>
            </div>
            <div className="flex h-64 w-64 flex-col items-center rounded-sm bg-white p-4 text-center shadow-lg md:h-72 md:w-80">
              <Image
                src="/google.svg"
                alt="Technical Support"
                width={75}
                height={50}
              />
              <h3 className="mt-4 text-base font-semibold md:text-lg">
                connect to analytics, and search consoles
              </h3>
              <p className="pt-4 text-sm md:text-base">
                With our service you can connect to google analytics, and their
                search console to know how your site is doing.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full bg-rose-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 font-montserrat text-4xl font-extrabold">
            Ready to Deploy your site?
          </h2>
          <p className="mb-8 font-merriweather text-xl">
            It's time to build a site that has you stand out from your competition. Get your website
            built with uis and deployed with us today.
          </p>
          <Link href="/build" legacyBehavior>
            <a className="mb-4 mr-4 rounded bg-rose-600 px-6 py-3 font-bold text-white hover:bg-rose-700">
              Get Started
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default WebApps;
