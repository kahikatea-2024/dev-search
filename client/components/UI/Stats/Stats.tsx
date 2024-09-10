import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface StatItemProps extends HTMLAttributes<HTMLDivElement> {
  label: string
  value: string | number
}

function StatItem({ label, value, className, ...rest }: StatItemProps) {
  return (
    <div
      className={twMerge(
        'flex flex-col items-center border-4 border-lime-400',
        className,
      )}
      {...rest}
    >
      <span className="text-s m-2 p-2 text-sm text-blue-700">{label}</span>
      <span className="m-2 p-2 text-lg font-bold text-blue-700 ">{value}</span>
    </div>
  )
}

export default StatItem
