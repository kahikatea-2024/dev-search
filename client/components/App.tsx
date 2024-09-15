
import { Header } from './Header.tsx'
import { AllRepos } from './AllRepos.tsx'
import { useState } from 'react'

function App() {
  const [username, setUsername] = useState<string>('') // Start with an empty string


  return (
    <>
      <div className="app ">
        <Header username={username} setUsername={setUsername} />
        <AllRepos username={username} />
      </div>
    </>
  )
}

export default App
