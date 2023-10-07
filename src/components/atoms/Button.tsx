import ReactLoading from 'react-loading'

type ButtonProps = {
  children: React.ReactNode
  className?: string
  buttonClassName?: string
  icon?: React.ReactNode
  loading?: boolean
  [others: string]: any
}

export const Button = ({ children, className, icon, loading, buttonClassName, ...others }: ButtonProps) => {
  return (
    <div className={`${className} rounded-md relative overflow-hidden w-fit select-none `}>
      {loading && (
        <div className="flex justify-center items-center bg-white opacity-90 absolute inset-0">
          <ReactLoading type="spin" width={30} height={30} color="black" />
        </div>
      )}
      <button className={`flex items-center ${buttonClassName}`} {...others}>
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </button>
    </div>
  )
}
