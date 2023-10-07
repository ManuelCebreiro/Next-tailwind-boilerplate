import { languageRedirect } from '@/helpers/changeLanguage'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const Tab = ({ className }: { className?: string }) => {
  const router = useRouter()
  const currentLanguage = router.locale || 'es'
  const [selectedTab, setSelectedTab] = useState(currentLanguage)
  const handleTabClick = (tab: string) => {
    languageRedirect(router, tab)
    setSelectedTab(tab)
  }
  return (
    <div className={`${className}`}>
      <div className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
        <span
          className={`inline-block w-full p-1 px-2 rounded-l-lg cursor-pointer ${
            selectedTab === 'es'
              ? 'bg-blue-100 hover:bg-blue-100 dark:bg-gray-800 dark:hover:bg-gray-700'
              : 'bg-white hover:text-gray-700 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'
          }`}
          onClick={() => handleTabClick('es')}
        >
          Es
        </span>
        <span
          className={`inline-block w-full p-1 px-2 rounded-r-lg cursor-pointer ${
            selectedTab === 'en'
              ? 'bg-blue-100 hover:bg-blue-100 dark:bg-gray-800 dark:hover:bg-gray-700'
              : 'bg-white hover:text-gray-700 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'
          }`}
          onClick={() => handleTabClick('en')}
        >
          En
        </span>
      </div>
    </div>
  )
}
