import { useEffect, useState } from 'react'
import { useUser, useUserRepos } from '../hooks/useUser.ts'
import { Header } from './Header.tsx'
import SearchBar from './UI/search bar/SearchBar.tsx'
import { User, UserRepos } from '../../models/user.ts'
import { AllRepos } from './AllRepos.tsx'

function App() {
  const [username, setUsername] = useState<string>('') // Start with an empty string

  // // Destructure data, error, and isLoading from the result of useUser
  // const {
  //   data: userData,
  //   error: userError,
  //   isLoading: userLoading,
  // } = useUser(username)

  // const {
  //   data: repoData,
  //   error: repoError,
  //   isLoading: repoLoading,
  // } = useUserRepos(username)

  // const [currentUserData, setCurrentUserData] = useState<User | null>(null)
  // const [currentRepoData, setCurrentRepoData] = useState<UserRepos[] | null>(
  //   null,
  // )

  // // Reset data when username changes and refetch data
  // useEffect(() => {
  //   setCurrentUserData(null)
  //   setCurrentRepoData(null)

  //   if (userData) {
  //     setCurrentUserData(userData)
  //   }
  //   if (repoData) {
  //     setCurrentRepoData(repoData)
  //   }
  // }, [userData, repoData, username])

  // if (userLoading || repoLoading) return <div>Loading...</div>
  // if (userError || repoError)
  //   return <div>Error: {userError?.message || repoError?.message}</div>

  return (
    <>
      <div className="app ">
        <Header username={username} setUsername={setUsername} />
        <AllRepos username={username} />
        {/* <SearchBar setUsername={setUsername} />
        {currentUserData ? (
          <>
            <p>{currentUserData.name}</p>
            <p>{currentUserData.bio}</p>
          </>
        ) : (
          <p>No user data found</p>
        )}
        <ul>
          {currentRepoData && currentRepoData.length > 0 ? (
            currentRepoData.map((repo, i: number) => <li key={i}>{repo.name}</li>)
          ) : (
            <p>No repositories found</p>
          )}
        </ul> */}
      </div>
    </>
  )
}

export default App
