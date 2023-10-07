import { NextRouter } from 'next/router'

export const languageRedirect = (router: NextRouter, language: string) => {
  const { pathname, asPath, query } = router
  router.push({ pathname, query }, asPath, { locale: language })
}
