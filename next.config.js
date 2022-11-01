/* eslint-disable no-param-reassign */
const sitemap = require(`nextjs-sitemap-generator`);

sitemap({
  pagesDirectory: `${__dirname}/src/pages`,
  targetDirectory: `public/`,
});

module.exports = {};
