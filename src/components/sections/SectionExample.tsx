import { useTranslation } from 'next-i18next'

export function SectionExample() {
  const { t } = useTranslation()

  const markdownContent = `
  \`\`\`
  <div>
    <div className="flex justify-center">
      <label className="flex self-center absolute text-xs font-bold uppercase">
      Componente ejemplo
      </label>
    </div>
    <div className="flex justify-center mt-6 mb-14">
      <h2>Cambia esto para hacer lo tuyo </h2>
    </div>
  </div>
  \`\`\`
    `
  return (
    <div>
      <div className="flex justify-center">
        <label className="flex self-center absolute text-xs font-bold uppercase">Componente ejemplo</label>
      </div>
      <div className="flex flex-col justify-center items-center mt-6 mb-14">
        <h2>Cambia esto para hacer lo tuyo </h2>
        <pre className="w-full bg-black p-4 rounded-md text-white">
          <code>{markdownContent.trim()}</code>
        </pre>
      </div>
    </div>
  )
}
