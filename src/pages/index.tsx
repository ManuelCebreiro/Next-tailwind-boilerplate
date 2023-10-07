import { Layout } from '@/components/layouts/Layout'
import { SectionExample } from '@/components/sections/SectionExample'
import { SectionExampleOne } from '@/components/sections/SectionExampleOne'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {
  const { t } = useTranslation()
  return (
    <Layout>
      <div className="px-36 py-16 flex flex-col items-center">
        <SectionExampleOne />
      </div>
      <div className="px-36">
        <SectionExample />
      </div>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})
