import { UserRepos } from '../../../../models/user'

interface props {
  data: UserRepos
}
export default function RepoCard({ data }: props) {
  console.log('data', data)

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-3 gap-4">
        <div className="col-span-3">
          <h2 className="text-2xl text-btn">{data.name}</h2>
        </div>
        <div className="col-span-4 row-start-2">
          <p className="max-h-12 overflow-hidden text-ellipsis">
            {data.description}
          </p>
        </div>

        <div className="row-start-3">
          <p className="">{data.license}</p>
        </div>
        <div className="row-start-3">
          <p className="">{data.forks}</p>
        </div>
        <div className="row-start-3">
          <p className="">{data.stargazers_count}</p>
        </div>
        <div className="row-start-3">
          <p className="overflow-hidden">{data.updated_at}</p>
        </div>
      </div>
    </>
  )
}
