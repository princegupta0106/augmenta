import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Game1 from './pages/Game1';

function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game1" element={<Game1/>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
