import { useAuth0, User as AuthUser } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authentication'
import SignInBtn from './UI/AuthBtn/AuthBtn'
import Avatar from './UI/Avatar/Avatar'
import Cover from './UI/cover/Cover'
import SearchBar from './UI/search bar/SearchBar'
// import { useUser, useUserRepos } from '../hooks/useUser'
// import { useEffect, useState } from 'react'
import { User, UserRepos } from '../../models/user'

interface HeaderProps {
  username: string
  setUsername: React.Dispatch<React.SetStateAction<string>>
  currentUserData: User | null
  currentRepoData: UserRepos[] | null
}

export function Header({
  username,
  setUsername,
  currentUserData,
  currentRepoData,
}: HeaderProps) {
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

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="search-bar rounded-xl bg-bg p-4 text-white">
            <SearchBar setUsername={setUsername} />
            {currentUserData ? (
              <>
                <div className="flex items-center">
                  <img
                    className="w-14 rounded-full"
                    src={currentUserData.avatar_url}
                    alt="avatar"
                  />
                  <div className="p-2">
                    <p className="font-mono text-2xl text-org">
                      {currentUserData.name}
                    </p>
                    <p className="text-lightBlue">{currentUserData.bio}</p>
                  </div>
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
