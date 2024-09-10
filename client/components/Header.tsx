import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authentication'
import SignInBtn from './UI/AuthBtn/AuthBtn'
import Avatar from './UI/Avatar/Avatar'
import Cover from './UI/cover/Cover'

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
      <div className="relative">
        <Cover />
        <div className="absolute right-8 top-8 z-10">
          <IfAuthenticated>
            <SignInBtn text={'Sign Out'} onClick={handleSignOut}></SignInBtn>
            <Avatar user={user?.picture} alt={user?.nickname}></Avatar>
          </IfAuthenticated>

          <IfNotAuthenticated>
            <SignInBtn text={'Sign In'} onClick={handleSignIn}></SignInBtn>
          </IfNotAuthenticated>
        </div>
      </div>
    </>
  )
}
