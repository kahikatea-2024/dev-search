import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authentication'
import Avatar from './UI/Avatar/Avatar'
import Cover from './UI/cover/Cover'
import AuthBtn from './UI/AuthBtn/AuthBtn'

export function Header() {
  const { logout, loginWithPopup, user } = useAuth0()

  const handleSignOut = () => {
    return logout()
  }

  const handleSignIn = () => {
    return loginWithPopup()
  }

  return (
    <>
      <Cover />
      <IfAuthenticated>
        <AuthBtn text={'Sign Out'} onClick={handleSignOut}></AuthBtn>
        <Avatar user={user?.picture} alt={user?.nickname}></Avatar>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <AuthBtn text={'Sign In'} onClick={handleSignIn}></AuthBtn>
      </IfNotAuthenticated>
    </>
  )
}
