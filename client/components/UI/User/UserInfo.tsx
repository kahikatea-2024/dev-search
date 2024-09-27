import { User } from '../../../../models/user'

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

  return <>{user.followers}</>
}
