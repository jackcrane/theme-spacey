const withLess = require("next-with-less");

module.exports = withLess({
  lessLoaderOptions: {
    /* ... */
  },
  images: {
    domains: ["unpkg.com"],
  },
});
