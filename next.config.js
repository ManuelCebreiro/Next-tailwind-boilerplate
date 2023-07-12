/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en']
  }
}

module.exports = nextConfig
