import { useEffect, useState } from 'react'
import { useUser, useUserRepos } from '../hooks/useUser.ts'
import { Header } from './Header.tsx'
import SearchBar from './UI/search bar/SearchBar.tsx'
import { User, UserRepos } from '../../models/user.ts'
import RepoCard from './UI/RepoCard.tsx/RepoCard.tsx'

function App() {
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
      <div className="app bg-bg">
        <Header />
        <h1 className="text-3xl font-bold underline">
          Fullstack Boilerplate - with Fruits!
        </h1>
        <SearchBar setUsername={setUsername} />
        {currentUserData ? (
          <>
            <p>{currentUserData.name}</p>
            <p>{currentUserData.bio}</p>
          </>
        ) : (
          <p>No user data found</p>
        )}
        <ul>
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
              {currentRepoData && currentRepoData.length > 0 ? (
                currentRepoData.map((repo, i: number) => (
                  <li key={i} className="rounded-lg bg-boxBg p-4 shadow-lg">
                    <RepoCard data={repo} />
                  </li>
                ))
              ) : (
                <p>No repositories found</p>
              )}
            </div>
          </div>
        </ul>
      </div>
    </>
  )
}

export default App

{
  ;<div className="container mx-auto px-4 py-6">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="rounded-lg bg-white p-4 shadow-lg">
        <h3 className="mb-2 text-lg font-semibold">Card Title 1</h3>
        <p className="text-gray-700">
          This is a description of the first card. It contains information about
          the content.
        </p>
      </div>
      <div className="rounded-lg bg-white p-4 shadow-lg">
        <h3 className="mb-2 text-lg font-semibold">Card Title 2</h3>
        <p className="text-gray-700">
          This is a description of the second card. It contains information
          about the content.
        </p>
      </div>
    </div>
  </div>
}
