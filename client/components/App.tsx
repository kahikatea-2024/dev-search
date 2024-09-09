import { useFruits } from '../hooks/useFruits.ts'
import { Header } from './Header.tsx'

function App() {
  const { data } = useFruits()

  return (
    <>
      <div className="app bg-bg">
        <Header />
        <h1 className="text-3xl font-bold underline">
          Fullstack Boilerplate - with Fruits!
        </h1>
        <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul>
      </div>
    </>
  )
}

export default App
