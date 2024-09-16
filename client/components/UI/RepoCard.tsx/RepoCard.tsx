import { UserRepos } from '../../../../models/user'
import RepoStat from './RepoStat'

interface props {
  data: UserRepos
}
export default function RepoCard({ data }: props) {
  console.log('data', data)
  const { name, description, license, forks, stargazers_count, updated_at } =
    data

  const icons = {
    license: (
      <svg
        className="h-8 w-8 text-white"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {' '}
        <path stroke="none" d="M0 0h24v24H0z" />{' '}
        <path d="M14 3v4a1 1 0 0 0 1 1h4" />{' '}
        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />{' '}
        <path d="M9 15l2 2l4 -4" />
      </svg>
    ),
    fork: (
      <svg
        className="h-8 w-8 text-white"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {' '}
        <path stroke="none" d="M0 0h24v24H0z" />{' '}
        <circle cx="12" cy="18" r="2" /> <circle cx="7" cy="6" r="2" />{' '}
        <circle cx="17" cy="6" r="2" />{' '}
        <path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2" />{' '}
        <line x1="12" y1="12" x2="12" y2="16" />
      </svg>
    ),
    star: (
      <svg
        className="h-8 w-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  }

  return (
    <>
      <div className="">
        <div className="">
          <h2 className="mb-4 text-2xl  text-btn">{name}</h2>
        </div>
        <div className="text-white">
          <p className="max-h-12 overflow-hidden text-ellipsis">
            {description}
          </p>
        </div>

        <div className="flex space-x-4 p-4">
          {license !== 'No license' ? (
            <>
              <RepoStat icon={icons.license} value={license} />
            </>
          ) : (
            ''
          )}
          {forks !== 0 ? <RepoStat icon={icons.fork} value={forks} /> : ''}
          {stargazers_count !== 0 ? (
            <RepoStat icon={icons.star} value={stargazers_count} />
          ) : (
            ''
          )}
          {updated_at && <RepoStat icon={'updated'} value={updated_at} />}
        </div>
      </div>
    </>
  )
}
