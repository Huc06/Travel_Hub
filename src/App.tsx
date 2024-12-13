import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero'
import Footer from './components/Footer'
import LatestProjects from './components/LatestProjects'
import Header from './components/Header'
import Projects from './components/Projects'
import CurrentPlan from './components/CurrentPlan'
import Dao from './components/Dao/Dao'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <LatestProjects />
          </>
        } />
        <Route path="/projects" element={<Projects />} />
        <Route path="/dao" element={<Dao />} />
        <Route path="/CurrentPlan" element={<CurrentPlan />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App