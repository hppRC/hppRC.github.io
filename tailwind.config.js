module.exports = {
  content: [
    `./src/**/*.html`,
    `./src/**/*.tsx`,
    `./src/**/*.jsx`,
    `./src/**/*.scss`,
    `./src/**/*.css`,
  ],
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
