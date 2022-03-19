/** @type {import('next').NextConfig} */
const withPreact = require('next-plugin-preact');
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})
const { i18n } = require('./next-i18next.config')

const nextConfig = withBundleAnalyzer({
  reactStrictMode: false,
  i18n,
  webpack5: true,

  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }

    return config
  },
})

module.exports = withPreact(nextConfig)
