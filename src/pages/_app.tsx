import '@/styles/globals.scss'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
const i18nextConfig = require('../../next-i18next.config')

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default appWithTranslation(App, i18nextConfig)
