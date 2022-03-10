const { resolve } = require("node:path")

module.exports = {
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en", "es", "de", "fr"],
    localePath: resolve("./locales"),
  },
};
