import { useEffect } from 'react'
import { useLucid } from './context/LucidProvider'
import Hero from './components/Hero'
import Footer from './components/Footer'
import LatestProjects from './components/LatestProjects'
import Header from './components/Header'

function App() {
  const { address, getUtxos } = useLucid();
  
  useEffect(() => {
    async function temp() {
      const utxos = await getUtxos();
      console.log(utxos);
    }
    temp();
  }, [address, getUtxos]);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LatestProjects />
      <Footer/>
    </div>
  )
}

export default App