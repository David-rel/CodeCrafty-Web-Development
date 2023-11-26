module.exports = {
  siteUrl: "https://codecrafty.dev",
  generateRobotsTxt: true, // (optional)
  // additional configuration options...
  additionalPaths: async () =>
    [
      "/build",
      "/how",
      "/about/contact",
      "/services/development",
      "/services/maintenance",
      "/about/team",
      "/services/design",
      "/contact",
      "/",
      "/blog",
      "/about/aboutUs",
      "/blog/WhyAI",
      "/services/ai",
    ].map((url) => ({
      loc: url, // The URL of the page
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    })),
};
