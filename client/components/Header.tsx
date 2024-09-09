import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authentication'
import SignInBtn from './UI/AuthBtn/AuthBtn'

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
      <IfAuthenticated>
        <SignInBtn text={'Sign Out'} onClick={handleSignOut}></SignInBtn>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <SignInBtn text={'Sign In'} onClick={handleSignIn}></SignInBtn>
      </IfNotAuthenticated>
    </>
  )
}
