interface props {
  text: string
  onClick?: () => void
}

export default function AuthBtn(props: props) {
  const { text, onClick } = props
  return (
    <>
      <div>
        <button onClick={onClick}>{text}</button>
      </div>
    </>
  )
}
