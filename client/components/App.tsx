import { useUser, useUserRepos } from '../hooks/useUser.ts'

function App() {
  const username = 'bradacraig'
  const { data: userData } = useUser(username)
  const { data: repoData } = useUserRepos()

  return (
    <>
      <div className="app">
        <h1 className="text-3xl font-bold underline">
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
