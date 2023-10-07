import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function HomeTest() {
  const { t } = useTranslation()

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <h1>{t('common:TodoTest', 'Haciendo pruebas')}</h1>
    </main>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})
