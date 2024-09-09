import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authentication'

export function Header() {
  const { logout, loginWithRedirect, user } = useAuth0()

  const handleSignOut = () => {
    return logout()
  }

  const handleSignIn = () => {
    return loginWithRedirect()
  }

  return (
    <>
      <IfAuthenticated>
        <p>logout button goes here</p>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <p>login button goes here</p>
      </IfNotAuthenticated>
    </>
  )
}
