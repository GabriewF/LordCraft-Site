const {withSentryConfig} = require('@sentry/nextjs');
const {i18n} = require("./next-i18next.config");

const moduleExports = {
  reactStrictMode: false,
  i18n,
};

const sentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
