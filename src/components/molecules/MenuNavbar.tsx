import { useTranslation } from 'next-i18next'
import { Button } from '../atoms/Button'
import { Tab } from '../atoms/Tab'

export const MenuNavbar = () => {
  const { t } = useTranslation()

  return (
    <div className="md:flex gap-3 hidden">
      <Button buttonClassName="content-center">{t('common:nombre1')}</Button>
      <Button buttonClassName="content-center">{t('common:nombre2')}</Button>
      <Button buttonClassName="btn-primary-500">{t('common:nombre3')}</Button>
      <Tab />
    </div>
  )
}
