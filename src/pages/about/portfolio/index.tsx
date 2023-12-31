import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

// components/Portfolio.js
export default function Portfolio() {
  const technologies = [
    {
      name: "React Js",
      description:
        "Being the most popular web framework, React Js provides us with a variety of flexible libraries, tools, and ecosystems to build large-scale applications for our clients",
      imageUrl: "/react.png", // Replace with your path to React icon
      width: 96, // Adjust according to your actual image's aspect ratio
      height: 96,
    },
    {
      name: "Node Js",
      description:
        "Being one of the most used backend frameworks of the time, Node.js enables us to create small to large scale software solutions for majority of our clients",
      imageUrl: "/node.png", // Replace with your path to Node.js icon
      width: 96, // Adjust according to your actual image's aspect ratio
      height: 96,
    },
    {
      name: "TypeScript",
      description:
        "As a statically typed superset of JavaScript, TypeScript brings type safety, enhancing development efficiency and runtime reliability in our large-scale applications.",
      imageUrl: "/typescript.png",
      width: 96,
      height: 96,
    },
    {
      name: "Next Js",
      description:
        "Next.js allows us to build server-side rendering and static web applications using React. It's a production-ready framework that helps us to create optimal user experiences.",
      imageUrl: "/next-js.svg",
      width: 96,
      height: 96,
    },
    {
      name: "Tailwind CSS",
      description:
        "Tailwind CSS is a utility-first CSS framework that we use to rapidly build custom user interfaces. Its direct-to-style approach makes it a powerful tool for styling.",
      imageUrl: "/tailwind.png",
      width: 96,
      height: 96,
    },
    {
      name: "SQL",
      description:
        "SQL is a standard language for managing data held in a relational database management system. It's a powerful tool for querying and manipulating data.",
      imageUrl: "/sql.svg",
      width: 96,
      height: 96,
    },
    {
      name: "Azure Cloud",
      description:
        "Azure is Microsoft's cloud computing platform, providing a variety of cloud services, including those for computing, analytics, storage and networking. It helps us deploy and manage applications at scale.",
      imageUrl: "/azure.png",
      width: 96,
      height: 96,
    },
    {
      name: "Open AI",
      description:
        "OpenAI provides us with tools and resources to build safe and beneficial artificial intelligence or AI-powered applications, contributing to the advancement of digital intelligence in the way that is most likely to benefit humanity.",
      imageUrl: "/openai.png",
      width: 96,
      height: 96,
    },
    {
      name: "Cloudinary",
      description:
        "Cloudinary is a cloud-based service that provides an end-to-end image and video management solution including uploads, storage, manipulations, optimizations and delivery.",
      imageUrl: "/cloudinary.webp",
      width: 96,
      height: 96,
    },
    {
      name: "Fauna DB",
      description:
        "FaunaDB is a serverless cloud database that provides fast global access to data via modern APIs like GraphQL without sacrificing data consistency. Useful for simplifying code and reducing costs.",
      imageUrl: "/fauna.png",
      width: 96,
      height: 96,
    },
    {
      name: "Supabase",
      description:
        "Supabase adds real-time and RESTful APIs to Postgres without a single line of code, providing us with the tools to build and scale our applications faster.",
      imageUrl: "/supabase.png",
      width: 96,
      height: 96,
    },
    {
      name: "Firebase",
      description:
        "Firebase is Google's mobile platform that helps us quickly develop high-quality apps, grow our user base, and earn more money. It provides functionalities like analytics, databases, messaging and crash reporting.",
      imageUrl: "/firebase.png",
      width: 96,
      height: 96,
    },
    // ... Add the rest of the technologies like AWS, Flutter, Next.js, Firebase, MySQL, MongoDB
  ];

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Code Crafty - Portfolio</title>
        <meta name="description" content="Showcasing our work" />
      </Head>

      <Navbar />

      <div className="w-full pb-6 text-center">
        <h1 className="mb-8 pt-12 text-7xl font-bold md:text-7xl xl:text-7xl">
          Code Crafty&apos;s Portfolio
        </h1>
      </div>

      <div className="py-12">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Our Technology Stack
        </h2>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 rounded-lg bg-white p-8 shadow-lg"
              >
                <div className="flex-shrink-0">
                  <Image
                    src={tech.imageUrl}
                    alt={tech.name}
                    width={tech.width}
                    height={tech.height}
                    layout="intrinsic" // This layout ensures the image is not stretched or squished
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold">{tech.name}</h3>
                  <p className="mt-2 text-gray-700">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray px-4 py-8 pt-36 md:px-0">
        {" "}
        {/* Adjusted padding */}
        <div className="w-full pb-6 text-center">
          <h1 className="mb-8 text-6xl font-bold md:text-6xl xl:text-6xl">
            Our Projects
          </h1>
        </div>
        <div className="mx-auto mb-12 max-w-7xl">
          {" "}
          {/* Centering the grid */}
          <div className="grid grid-cols-1 items-center gap-4 pb-16 md:grid-cols-2 md:gap-24">
            <div>
              {" "}
              <h3 className="mb-3 text-5xl font-bold">Coerver Colorado</h3>
              <p className="mb-4 text-lg text-gray-800">
                Coerver Colorado is a leading soccer coaching organization. We
                had the opportunity to redesign their website, enhancing the
                user experience and modernizing the design. The new website is
                not only visually appealing but also provides easy navigation
                and access to information for their users. The project was a
                complete overhaul of the existing site, with a focus on
                responsiveness and performance.
              </p>
              <Link href="https://www.coervercolorado.com/" legacyBehavior>
                <a className="inline-block rounded-full bg-white px-4 py-2 text-lg font-semibold text-blue-600 hover:text-blue-700 hover:underline">
                  https://www.coervercolorado.com/
                </a>
              </Link>
            </div>
            <div className="flex justify-center">
              {" "}
              {/* Removed width class */}
              <Image
                src="/CoerverWebsite.png"
                alt="Saool Quiz App"
                width={100}
                height={300}
                layout="responsive"
                objectFit="contain" // Changed to 'contain' to avoid cropping
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto mb-12 max-w-7xl">
          {" "}
          {/* Centering the grid */}
          <div className="grid grid-cols-1 items-center gap-4 pb-16 md:grid-cols-2 md:gap-24">
            <div className="flex justify-center">
              {" "}
              {/* Removed width class */}
              <Image
                src="/RJRobotics.png"
                alt="Saool Quiz App"
                width={1000}
                height={300}
                layout="responsive"
                objectFit="contain" // Changed to 'contain' to avoid cropping
                className="rounded-lg"
              />
            </div>
            <div>
              {" "}
              <h3 className="mb-3 text-5xl font-bold">Regis Jesuit Robotics</h3>
              <p className="mb-4 text-lg text-gray-800">
                Our team was tasked with building a project from scratch for a
                robotics team. We developed a comprehensive system that manages
                the team&apos;s operations, from scheduling to inventory management.
                The system was designed with a focus on usability, ensuring that
                the team can focus on their core work of building and
                programming robots. This project showcased our ability to
                deliver a complex, custom solution that meets our client&apos;s
                specific needs.
              </p>
              <Link href="https://www.rj3729.com/" legacyBehavior>
                <a className="inline-block rounded-full bg-white px-4 py-2 text-lg font-semibold text-blue-600 hover:text-blue-700 hover:underline">
                  https://www.rj3729.com/
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
