



import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import Portfolio from './pages/Portfolio';
import Testimonials from './pages/Testimonials';
import Software from './pages/Software';
import Navbar from './components/Navbar'; // or Navbar2 if you're using that
import Footer from './components/Footer';
import Webapp from './pages/Webapp';
import Mobapp from './pages/Mobapp';
import ScrollToTop from './components/ScrollToTop';
import MainHome from './pages/MainHome';

function AppContent() {
  const location = useLocation();

  const hideNavbar = location.pathname === '/Software';

  return (
    <>
      {!hideNavbar && <Navbar />} 
       <ScrollToTop/>
           <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Software" element={<Software />} />
         <Route path="/Webapp" element={<Webapp />} />
         <Route path="/Mobapp" element={<Mobapp />} />
        <Route path="/MainHome" element={<MainHome />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

