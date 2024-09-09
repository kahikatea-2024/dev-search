interface props {
  user: string | undefined
  alt: string | undefined
}

export default function Avatar(props: props) {
  const { user, alt } = props

  return (
    <>
      <img src={user} alt={alt} />
    </>
  )
}
