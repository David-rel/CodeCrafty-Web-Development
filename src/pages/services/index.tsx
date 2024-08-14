import Head from "next/head";
import React from "react";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

import WebsiteService from "~/components/services/website";
import WebAppsService from "~/components/services/webApp";
import DomainService from "~/components/services/domain";
import MaintenanceService from "~/components/services/maintenance";
import AIService from "~/components/services/ai";
import AnalyticsService from "~/components/services/analytics";
import BlogService from "~/components/services/blog";
import EcommerceService from "~/components/services/ecommerce";

const ServiceSection: React.FC<{
  id: string;
  Component: React.JSX.Element;
}> = ({ id, Component }) => {
  return (
    <section id={id} className="py-16">
      {Component}
    </section>
  );
};

function Services() {
  return (
    <div>
      <Head>
        <title>Code Crafty - Services</title>
      </Head>
      <Navbar />
      <div>
        <h1>Services</h1>
        <ServiceSection id="website" Component={<WebsiteService />} />
        <ServiceSection id="web-apps" Component={<WebAppsService />} />
        <ServiceSection id="domain" Component={<DomainService />} />
        <ServiceSection id="maintenance" Component={<MaintenanceService />} />
        <ServiceSection id="ai" Component={<AIService />} />
        <ServiceSection id="analytics" Component={<AnalyticsService />} />
        <ServiceSection id="blog" Component={<BlogService />} />
        <ServiceSection id="ecommerce" Component={<EcommerceService />} />
      </div>
      <Footer />
    </div>
  );
}

export default Services;
