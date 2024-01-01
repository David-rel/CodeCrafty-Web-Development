import React from "react";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

type TeamMemberProps = {
  imageSrc: string;
  name: string;
  description: string;
  role: string;
  email: string;
  insta: string;
};

function TeamMember({
  imageSrc,
  name,
  description,
  role,
  email,
  insta,
}: TeamMemberProps) {
  return (
    <div
      data-aos="fade-up"
      className="mx-auto mb-8 max-w-sm border-b border-gray-300 pb-6 font-merriweather dark:border-gray-700 sm:w-full md:w-full lg:w-full xl:w-full"
    >
      <Head>
        <title>Code Crafty - Team</title>
      </Head>
      <div className="h-56 w-full rounded">
        <Image
          src={imageSrc}
          alt={`Display picture of ${name}`}
          role="img"
          width={1000}
          height={1000}
          className="h-full w-full overflow-hidden rounded object-cover shadow"
        />
      </div>
      <div className="flex w-full items-center justify-between pb-1 pt-6">
        <p className="text-xl font-normal text-gray-800">{name}</p>
        <div className="flex justify-center">
          {insta == "none" ? (
            <></>
          ) : (
            <Link
              href={insta}
              aria-label="Open instagram"
              role="link"
              className="mx-2"
              legacyBehavior
            >
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/white-bg-with-description-svg3.svg"
                  alt="instagram"
                  width={25}
                  height={25}
                />
              </a>
            </Link>
          )}
        </div>
      </div>
      <p className="pb-3 text-base text-gray-600">{role}</p>
      <p className="text-sm font-normal leading-6 text-gray-600">
        {description}
      </p>
      <p className="pt-4 text-sm font-normal leading-6 text-gray-600">
        Email:{" "}
        <a href={`mailto:${email}`} className="underline hover:text-blue-500">
          {email}
        </a>
      </p>
    </div>
  );
}

function Team() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto w-11/12 overflow-y-hidden pt-16 xl:w-full">
        <div data-aos="fade" className="w-full font-merriweather">
          <p className="pb-3 text-center font-montserrat text-lg font-normal text-gray-600 sm:text-left">
            The CODE CRAFTY TEAM
          </p>
          <h1 className="mx-auto w-5/6 text-center text-3xl font-extrabold text-gray-800 sm:mx-0 sm:w-4/6 sm:text-left lg:text-4xl xl:text-4xl">
            Meet The Talented People Behind the Scenes of Code Crafty Web
            Development and Designs
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 pt-20 md:grid-cols-2">
          <TeamMember
            imageSrc="/David-3.png"
            name="David Fales"
            role="CEO"
            description="The CEO, Makes sure everything is going correct and to plan. Mainly works on the Design, Development, and AI Integration into our websites."
            email="davidfales@codecrafty.dev"
            insta="https://www.instagram.com/_david_rel/"
          />
          <TeamMember
            imageSrc="/Diegoo.jpeg"
            name="Diego Gutierrez-Raghunath"
            role="Marketing and Sales Executive"
            description="The Executive of marketing and sales, Diego is responsible for the social media platforms and communicating Code Crafty's message to the world."
            email="diego_g@codecrafty.dev"
            insta="https://www.instagram.com/diego_rgr0/"
          />
          <TeamMember
            imageSrc="/Grant.jpg"
            name="Grant Rechtin"
            role="Software Developer and Tester"
            description="As the software and tester, Grant is responsible on making sure all outputs fro mCode Crafty are upto date and look perfect. Making sure it full fills the clients request as well."
            email="gsrechtin@codecrafty.dev"
            insta="none"
          />
          <TeamMember
            imageSrc="/Connor.jpg"
            name="Connor Mohr"
            role="Business Executive"
            description="Business Executive, Connor is responsible for keeping track of the legal workings here at Code Crafty. Making sure that everything we do can help us and you."
            email="connor.mohr@codecrafty.dev"
            insta="https://www.instagram.com/mohr_connor/"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Team;
