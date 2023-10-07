import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import PonElLogo from '../../../public/images/manuelcebreiro.jpg'
import { Button } from '../atoms/Button'
import { MenuNavbar } from '../molecules/MenuNavbar'

export function Navbar() {
  const router = useRouter()
  const { t } = useTranslation()
  const [open, setOpen] = useState<Boolean>()

  return (
    <>
      <div className="flex items-center justify-between w-full h-20 lg:py-4 lg:px-14 px-4 mb-1 bg-white">
        <Image
          quality={100}
          src={PonElLogo}
          alt="Home review"
          width={50}
          height={50}
          className="object-contain cursor-pointer "
          onClick={() => {
            router.push('/')
          }}
        />
        <MenuNavbar />
        <div className="md:hidden">
          <div onClick={() => {setOpen(!open)}}>
            {open && <GrClose />}
            {!open && <GiHamburgerMenu />}
          </div>
          {open ? (
            <div className=" gap-3 absolute top-20 left-0 w-full">
              <div className="bg-gray-100 flex flex-col items-center gap-5 p-4">
                <Button className="!w-full py-2 px-4 flex justify-center">{t('common:nombre1')}</Button>
                <Button className="!w-full py-2 px-4 flex justify-center">{t('common:nombre2')}</Button>
                <Button className="!w-full py-2 px-4 flex justify-center">{t('common:nombre3')}</Button>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  )
}
