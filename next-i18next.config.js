const { resolve } = require("node:path")

module.exports = {
  i18n: {
    defaultNS: "lang",
    defaultLocale: "en",
    locales: ["en", "pt"],
    localePath: resolve("./locales"),
  },
};
