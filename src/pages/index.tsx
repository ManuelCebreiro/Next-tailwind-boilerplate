import { Layout } from '@/components/layouts/Layout'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {
  const { t } = useTranslation()
  return (
    <Layout>
      <h1>{t('common:TodoTest', 'Haciendo pruebas')}</h1>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})
