import { HtmlHTMLAttributes } from 'react'
interface props {
  text: string
  onClick?: () => void
}
interface props extends HtmlHTMLAttributes<HTMLButtonElement> {}
export default function AuthBtn(props: props) {
  const { text, onClick } = props

  return (
    <>
      <div>
        <button
          onClick={onClick}
          className="w-fit rounded-lg bg-btn p-2 shadow-lg hover:scale-105 hover:bg-btnHover"
        >
          {text}
        </button>
      </div>
    </>
  )
}
