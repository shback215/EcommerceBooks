
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import AboutDogwood from './pages/AboutDogwood'

import './CSS/App.css'

function App() {
  return (
    <div className="app">
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/about-dogwood">AboutDogwood</Link>
      </nav>
      
     <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/about" element={<About />} />
        <Route path="/about-dogwood" element={<AboutDogwood />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App