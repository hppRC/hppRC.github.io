/* eslint-disable no-param-reassign */
const sitemap = require(`nextjs-sitemap-generator`);

sitemap({
  baseUrl: process.env.NEXT_PUBLIC_GITHUB_PAGES ? `hpprc.github.io` : `profile.hpprc.com`,
  pagesDirectory: `${__dirname}/src/pages`,
  targetDirectory: `public/`,
});

module.exports = {
  target: `serverless`,
  assetPrefix: ``,
};
