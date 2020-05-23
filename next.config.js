/* eslint-disable no-param-reassign */
const sitemap = require(`nextjs-sitemap-generator`);
const withOffline = require(`next-offline`);

sitemap({
  pagesDirectory: `${__dirname}/src/pages`,
  targetDirectory: `public/`,
});

module.exports = withOffline({
  target: `serverless`,
});
