import './App.css';
import GameBoard from './components/GameBoard';
import React from "react";
import Rules from './components/Rules';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Title from './components/Title';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Title />}/>
        <Route path="/Rules" element={<Rules />}/>
        <Route path="/play" element={<GameBoard />}/>
      </Routes>
    </div>
  );
}

export default App;
