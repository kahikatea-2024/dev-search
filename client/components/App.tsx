import { useEffect, useState } from 'react'
import { useUser, useUserRepos } from '../hooks/useUser.ts'
import { Header } from './Header.tsx'
import { User, UserRepos } from '../../models/user.ts'
import { AllRepos } from './AllRepos.tsx'
import { Footer } from './Footer/Footer.tsx'
import { Footer2 } from './Footer/Footer2.tsx'

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
      <div className="app ">
        <Header
          username={username}
          setUsername={setUsername}
          currentUserData={currentUserData}
          currentRepoData={currentRepoData}
        />
        <h1 className="text-3xl font-bold  underline ">
          Fullstack Boilerplate - with Fruits!
        </h1>
        <AllRepos username={username} />
        <Footer />
        <Footer2 />
      </div>
    </>
  )
}

export default App
