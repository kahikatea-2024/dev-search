import { UserRepos } from '../../../../models/user'
import RepoStat from './RepoStat'

interface props {
  data: UserRepos
}
export default function RepoCard({ data }: props) {
  console.log('data', data)
  const { name, description, license, forks, stargazers_count, updated_at } =
    data

  return (
    <>
      <div className="">
        <div className="">
          <h2 className="text-2xl text-btn">{name}</h2>
        </div>
        <div className="">
          <p className="max-h-12 overflow-hidden text-ellipsis">
            {description}
          </p>
        </div>

        {license && <RepoStat name="license" value={license} />}
        {forks && <RepoStat name="forks" value={forks} />}
        {stargazers_count && (
          <RepoStat name="stargazers" value={stargazers_count} />
        )}
        {updated_at && <RepoStat name="updated " value={updated_at} />}
      </div>
    </>
  )
}
