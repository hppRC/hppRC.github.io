/* eslint-disable no-param-reassign */
const withTM = require(`next-transpile-modules`)([
  `imagemin-svgo`,
  `next-optimized-images`,
]);
const sitemap = require(`nextjs-sitemap-generator`);
const withOffline = require(`next-offline`);
const withOptimizedImages = require(`next-optimized-images`);

sitemap({
  pagesDirectory: `${__dirname}/src/pages`,
  targetDirectory: `public/`,
});

module.exports = withOffline(
  withOptimizedImages(
    withTM({
      // target: `serverless`,
      swcMinify: true,
    })
  )
);
