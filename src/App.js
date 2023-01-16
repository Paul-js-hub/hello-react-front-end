import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Greeting } from './features/greeting/Greeting';
import { Home } from './Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/greetings" element={<Greeting />}/>
      </Routes>
    </div>
  );
}

export default App;
