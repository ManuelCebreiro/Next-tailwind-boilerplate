import { useTranslation } from 'next-i18next'

export function SectionExampleOne() {
  const { t } = useTranslation()

  return (
    <>
      <h1>{t('common:TodoTest', 'Haciendo pruebas')}</h1>
      <div className="flex flex-col items-center">
        <h2>BoilerPlate</h2>
        <h3>{`{Nextjs + TailwindCss + Typescript}`}</h3>
      </div>
    </>
  )
}
