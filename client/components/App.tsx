import { useUser, useUserRepos } from '../hooks/useUser.ts'
import { Header } from './Header.tsx'

function App() {
  const username = 'bradacraig'
  const { data: userData } = useUser(username)
  const githubToken = import.meta.env.VITE_GITHUB_TOKEN

  // Always call the hook unconditionally
  const { data: repoData, error, isLoading } = useUserRepos(githubToken)

  if (!githubToken) {
    return <div>Error: GitHub token is missing</div>
  }

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error fetching repos: {error.message}</div>

  return (
    <>
      <div className="app ">
        <Header />
        <h1 className="text-3xl font-bold  underline">
          Fullstack Boilerplate - with Fruits!
        </h1>
        <p>{userData?.name}</p>
        <p>{userData?.bio}</p>
        <ul>
          {repoData &&
            repoData.map((repo, i: number) => <li key={i}>{repo.name}</li>)}
        </ul>
      </div>
    </>
  )
}

export default App
