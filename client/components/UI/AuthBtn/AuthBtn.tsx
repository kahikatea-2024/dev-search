import { HtmlHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
interface props {
  text: string
  onClick?: () => void
  className: string
}
interface props extends HtmlHTMLAttributes<HTMLButtonElement> {}
export default function AuthBtn(props: props) {
  const { text, onClick, className } = props
  const ButtonClasses =
    'bg-btn hover:bg-btnHover hover:scale-105 w-fit rounded-lg p-2'
  return (
    <>
      <div>
        <button className={twMerge(ButtonClasses, className)} onClick={onClick}>
          {text}
        </button>
      </div>
    </>
  )
}
