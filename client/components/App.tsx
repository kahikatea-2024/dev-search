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

//https://kahikatea-2024-aimee/authorize?authorizationParams=%5Bobject%20Object%5D&client_id=Z9uzNBasqHE151tn3HUScssCOVdfwq9G&scope=openid%20profile%20email&response_type=code&response_mode=query&state=b3B1bEZsNkM0bmhnWGJaOUlRT2FfcXdhNk92Z1pLOEJDQ0tzYkZFYjlxTA%3D%3D&nonce=bi1JbEhmSVA3aE9xbUdIR01hMzVENkpvaE5UcDJ4Nm43UTF2V1pGZkltRQ%3D%3D&code_challenge=94RoaQdXJbSJByeKtevcu_ybZr5ZrmCH7p9gBCfFxtY&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtcmVhY3QiLCJ2ZXJzaW9uIjoiMS4xMi4xIn0%3D
