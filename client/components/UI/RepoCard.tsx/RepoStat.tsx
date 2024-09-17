interface props {
  value: string | number
  icon: JSX.Element | string
}

export default function RepoStat({ value, icon }: props) {
  // const  = props

  if (value) {
    return (
      <>
        <div className="text-md flex items-center text-white">
          {icon}
          {value}
        </div>
      </>
    )
  }
}
