import { useUser } from '../hooks/useUser.ts'

function App() {
  const username = 'bradacraig'
  const { data } = useUser(username)


  return (
    <>
      <div className="app">
        <h1 className="text-3xl font-bold underline">
          Fullstack Boilerplate - with Fruits!
        </h1>
        <p>{data?.name}</p>
        <p>{data?.bio}</p>
      </div>
    </>
  )
}

export default App
