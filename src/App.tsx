import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero'
import Stats from './components/Stats'
import LatestProjects from './components/LatestProjects';
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
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
            <Stats />
            <LatestProjects />
            <Testimonials />
            <Newsletter />
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