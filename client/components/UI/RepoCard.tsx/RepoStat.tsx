interface props {
  value: string | number
  name: string
}

export default function RepoStat({ value, name }: props) {
  // const  = props

  if (value) {
    return (
      <>
        <div className="text-white">
          {name} {value}
        </div>
      </>
    )
  }
}
