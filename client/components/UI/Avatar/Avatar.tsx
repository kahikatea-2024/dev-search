interface props {
  user: string | undefined
  alt: string | undefined
}

export default function Avatar(props: props) {
  const { user, alt } = props

  return (
    <>
      <img className="w-10 rounded-full" src={user} alt={alt} />
    </>
  )
}
