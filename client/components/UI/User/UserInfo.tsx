import { User } from '../../../../models/user'
import UserStat from './UserStat'

interface props {
  user: User
}

export default function UserInfo(props: props) {
  const { user } = props

  const userInfo = [
    {
      title: 'Followers',
      info: user?.followers,
    },
    {
      title: 'Following',
      info: user?.following,
    },
    {
      title: 'Location',
      info: user?.location,
    },
  ]

  return (
    <>
      <div className="flex list-none flex-wrap justify-center p-4">
        {userInfo ? (
          userInfo.map((user, i: number) => (
            <li key={i} className="">
              {user.info ? (
                <UserStat title={user.title} stat={user.info} />
              ) : (
                ''
              )}
            </li>
          ))
        ) : (
          <p>No user statistics found</p>
        )}
      </div>
    </>
  )
}
