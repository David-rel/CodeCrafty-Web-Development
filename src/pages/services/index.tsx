import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

import WebsiteService from "~/components/services/website";
import WebAppsService from "~/components/services/webApp";

function Services() {
  const router = useRouter();

  const scrollToSection = (sectionId:string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    console.log(router.asPath);
    const section = router.pathname.split('#').at(-1)
    
    if (section) scrollToSection(section);

  }, [router.asPath]);

  return (
    <div>
      <Head>
        <title>Code Crafty - Services</title>
      </Head>
      <Navbar />
      <div>
        <h1>Services</h1>

        <WebsiteService />
        <WebAppsService />
      </div>
      <Footer />
    </div>
  );
}

export default Services;
