import { useTranslation } from 'next-i18next'

export function Footer() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col justify-between w-full bg-black lg:px-28 lg:py-12 p-6 text-white">
      <div className="flex lg:flex-row gap-8 lg:justify-between flex-col lg:text-left text-center lg:mt-0 mt-8">
        <div className="lg:w-[280px]">
          <h4 className="font-extrabold text-base lg:text-2xl lg:block mb-4">
            Este boilerplate me sirve para ahorrar tiempo, si alguien lo usa espero que también le sirva.
          </h4>
        </div>
        <div className="lg:text-left">
          <ul className="flex flex-col gap-4">
            <li className="text-green-600 font-bold">Titulo Footer</li>
            <li className="cursor-pointer">Texto footer 1</li>
            <li>Texto footer 2</li>
          </ul>
        </div>
        <div className="lg:text-left ">
          <ul className="flex flex-col gap-4">
            <li className="text-green-600 font-bold">Titulo Footer 2</li>
            <li>Texto footer 1</li>
            <li>Texto footer 2</li>
            <li>Texto footer 3</li>
          </ul>
        </div>
        <div className="lg:text-left ">
          <ul className="flex flex-col gap-4">
            <li className="text-green-600 font-bold">Titulo Footer 3</li>
            <li>Texto footer 1</li>
            <li>Texto footer 2</li>
            <li>Texto footer 3</li>
          </ul>
        </div>
      </div>
      <div className="flex lg:flex-row lg:justify-between flex-col items-center">
        <p>Manuel</p>
        <div className="flex items-center w-[200px] lg:justify-between justify-evenly my-10">
          <div className="flex items-center justify-center bg-gray-600 rounded-full w-12 h-12">
            <p>2</p>
          </div>
          <div className="flex items-center justify-center bg-gray-600 rounded-full w-12 h-12">
            <p>3</p>
          </div>
          <div className="flex items-center justify-center bg-gray-600 rounded-full w-12 h-12">
            <p>4</p>
          </div>
        </div>
      </div>
    </div>
  )
}
