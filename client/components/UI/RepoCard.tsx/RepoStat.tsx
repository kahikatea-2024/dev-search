interface props {
  value: string | number
  icon: JSX.Element | string
}

export default function RepoStat({ value, icon }: props) {
  // const  = props

  if (value) {
    return (
      <>
        <div className="flex space-x-4 p-4 text-white">
          {icon}
          {value}
        </div>
      </>
    )
  }
}
