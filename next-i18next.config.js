const { resolve } = require("node:path")

module.exports = {
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR", "en-US"],
    localePath: resolve("./public/locales"),
  },
};
