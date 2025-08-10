import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { DiscoverPakistan } from './pages/DiscoverPakistan';
import { Apply } from './pages/Apply';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-teal-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/discover-pakistan" element={<DiscoverPakistan />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;