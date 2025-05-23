import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ContactPage from './pages/ContactPage'
import Portfolio from './pages/Portfolio'
import Testimonials from './pages/Testimonials'




function App() {
  return (
    <>
      
      <Router>
        <Routes>
      
          <Route path="/" element={<Home />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Testimonials" element={<Testimonials />} />

       
        </Routes>
        </Router>
      
    </>
  )
}

export default App
