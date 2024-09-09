interface props {
  text: string
  onClick?: () => void
}

export default function AuthBtn(props: props) {
  const { text, onClick } = props
  return (
    <>
      <div className="bg-btn hover:bg-btnHover w-fit rounded-lg p-2 hover:scale-105">
        <button onClick={onClick}>{text}</button>
      </div>
    </>
  )
}
