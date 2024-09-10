import { useAuth0, User } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authentication'
import SignInBtn from './UI/AuthBtn/AuthBtn'
import Avatar from './UI/Avatar/Avatar'
import Cover from './UI/cover/Cover'
import SearchBar from './UI/search bar/SearchBar'
import { useUser, useUserRepos } from '../hooks/useUser'
import { useEffect, useState } from 'react'
import { UserRepos } from '../../models/user'

export function Header() {
  const { logout, loginWithPopup, user } = useAuth0()

  const handleSignOut = () => {
    return logout()
  }

  const handleSignIn = () => {
    return loginWithPopup()
  }
  const [username, setUsername] = useState<string>('') // Start with an empty string

  // Destructure data, error, and isLoading from the result of useUser
  const {
    data: userData,
    error: userError,
    isLoading: userLoading,
  } = useUser(username)

  const {
    data: repoData,
    error: repoError,
    isLoading: repoLoading,
  } = useUserRepos(username)

  const [currentUserData, setCurrentUserData] = useState<User | null>(null)
  const [currentRepoData, setCurrentRepoData] = useState<UserRepos[] | null>(
    null,
  )

  // Reset data when username changes and refetch data
  useEffect(() => {
    setCurrentUserData(null)
    setCurrentRepoData(null)

    if (userData) {
      setCurrentUserData(userData)
    }
    if (repoData) {
      setCurrentRepoData(repoData)
    }
  }, [userData, repoData, username])

  if (userLoading || repoLoading) return <div>Loading...</div>
  if (userError || repoError)
    return <div>Error: {userError?.message || repoError?.message}</div>

  return (
    <>
      <div className="relative">
        <Cover />

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="search-bar rounded-xl bg-bg p-4 text-white">
            <SearchBar setUsername={setUsername} />
            {currentUserData ? (
              <>
                <div className="p-2">
                  <p className="font-mono text-2xl text-org">
                    {currentUserData.name}
                  </p>
                  <p className="text-lightBlue">{currentUserData.bio}</p>
                </div>
              </>
            ) : (
              <p>No user data found</p>
            )}
            <ul>
              <p className="pl-4 text-xl font-semibold text-pink">
                repositories:
              </p>
              {currentRepoData && currentRepoData.length > 0 ? (
                currentRepoData.map((repo, i: number) => (
                  <li className="pl-2 text-lightBlue" key={i}>
                    {repo.name}
                  </li>
                ))
              ) : (
                <p>No repositories found</p>
              )}
            </ul>
          </div>
        </div>

        <div className="absolute right-8 top-8 z-10 flex items-start space-x-2">
          <IfAuthenticated>
            <div className="flex items-start space-x-2">
              <Avatar user={user?.picture} alt={user?.nickname} />
              <div className="flex flex-col items-start">
                <SignInBtn text={'Sign Out'} onClick={handleSignOut} />
                <div className="text-align: end pt-2 text-white">
                  {user?.nickname}
                </div>
              </div>
            </div>
          </IfAuthenticated>

          <IfNotAuthenticated>
            <SignInBtn text={'Sign In'} onClick={handleSignIn} />
          </IfNotAuthenticated>
        </div>
      </div>
    </>
  )
}
