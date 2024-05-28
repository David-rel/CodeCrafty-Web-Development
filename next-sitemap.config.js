// next-sitemap.config.js
module.exports = {
  siteUrl: process.env.SITE_URL || "https://codecrafty.dev/",
  generateRobotsTxt: true, // (optional) Generate a robots.txt file
  exclude: ["/api/*", "/dev/*"],
  // You can also add additional configuration options here
};
