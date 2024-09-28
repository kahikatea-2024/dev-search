interface props {
  title: string
  stat: number | string
}

export default function UserStat(props: props) {
  const { title, stat } = props
  return (
    <div className="m-4 flex flex-row overflow-hidden rounded-xl bg-gray-900 p-4 shadow-lg">
      <p className="rounded-l border-r-2 border-btn px-4 text-btn">{title} </p>
      <p className="rounded-r px-4 text-white"> {stat} </p>
    </div>
  )
}
