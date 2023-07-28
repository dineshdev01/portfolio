import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './pages/HeroSection';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HeroSection/>} />
          <Route path="/a" element={<HeroSection/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
