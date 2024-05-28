import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

function Alias() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center">
        {/* Hero Section */}
        <section className="bg-navy relative py-32 lg:py-36">
          <div className="mx-auto flex w-full flex-col gap-10 px-5 sm:px-10 md:px-12 lg:max-w-7xl lg:flex-row lg:gap-12 lg:px-5">
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center lg:mx-0 lg:w-1/2 lg:max-w-none lg:flex-1 lg:items-start lg:py-7 lg:text-left xl:py-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-6xl">
                Introducing
                <span className="via-gold bg-gradient-to-br from-rose-500 to-rose-700 bg-clip-text text-transparent">
                  {" "}
                  Alias
                </span>
                . A new way for online business management
              </h1>
              <p className="mt-8 text-gray-700">
                Alias is a powerful tool that helps you manage your online
                business with ease. From managing your inventory to tracking
                sales, creating content, managing services, websites, and more
                Alias has you covered.
              </p>
              <div className="flex space-x-4">
                <Link href="https://alias.software/">
                  <button className="mt-5 transform rounded bg-rose-700 px-6 py-2 font-bold text-white transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-rose-500">
                    Check It Out
                  </button>
                </Link>
                <Link href="https://alias.software/getStarted">
                  <button className="hover:bg-teal mt-5 transform rounded border-2 border-black bg-white px-6 py-2 font-bold text-black transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-black hover:text-white">
                    Get Started
                  </button>
                </Link>
              </div>
              {/* Form removed for brevity */}
            </div>
            <div className="relative mx-auto flex max-w-3xl flex-1 lg:mx-0 lg:h-auto lg:w-1/2 lg:max-w-none">
              <Image
                src="/aliasLogo.png"
                alt="Hero image"
                layout="fill"
                objectFit="cover"
                className="rounded-3xl"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full bg-gray-50 py-20">
          <div className="container mx-auto text-center">
            <h2 className="mb-8 font-montserrat text-4xl font-extrabold">
              Our Services
            </h2>
            <p className="mb-8 font-merriweather text-xl">
              Alias offers a wide range of services to help you manage your
              online business more efficiently. Here are some of the key
              features:
            </p>
            <div className="flex flex-wrap justify-center">
              {projects.map((project, index) => (
                <div key={index} className="mb-8 w-full px-4 md:w-1/3">
                  <div className="rounded bg-white p-6 shadow">
                    <h3 className="mb-4 text-2xl font-bold">{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full bg-rose-100 py-20">
          <div className="container mx-auto text-center">
            <h2 className="mb-4 font-montserrat text-4xl font-extrabold">
              Ready to Get Started?
            </h2>
            <p className="mb-8 font-merriweather text-xl">
              Alias is still a project in development and we are looking for
              beta testers, and fundraising . Go to alias.software to get early
              access to it in the near future.
            </p>
            <Link href="https://alias.software" legacyBehavior>
              <a className="rounded bg-rose-600 px-6 py-3 font-bold text-white hover:bg-rose-700">
                Go To Site
              </a>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Alias;

const projects = [
  {
    title: "Website Creator",
    description:
      "A platform that allows users to easily create and manage their own websites without needing extensive technical knowledge.",
  },
  {
    title: "E-commerce Platform",
    description:
      "A comprehensive solution for setting up and running online stores, managing products, processing payments, and handling shipping.",
  },
  {
    title: "Analytics and Ads",
    description:
      "A tool that helps businesses track their online performance and optimize their advertising campaigns.",
  },
  {
    title: "Social Media Manager",
    description:
      "An application designed to help businesses and individuals manage their social media presence across multiple platforms.",
  },
  {
    title: "Customer Relationship Manager",
    description:
      "A system that helps businesses manage interactions with current and potential customers, improving customer service and retention.",
  },
  {
    title: "Bookings, Scheduling, and Forms",
    description:
      "A tool for managing appointments, scheduling meetings, and creating forms for data collection.",
  },
  {
    title: "Blogging Platform",
    description:
      "A service that allows users to create, publish, and manage blog posts with ease.",
  },
  {
    title: "Financial, Project, Team Management",
    description:
      "An integrated solution for managing finances, projects, and team collaboration in one place.",
  },
  {
    title: "Funnel Creation",
    description:
      "A platform that helps businesses create and manage sales funnels to guide potential customers through the buying process.",
  },
];