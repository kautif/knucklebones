import './App.css';
import GameBoard from './components/GameBoard';
import React from "react";
import Nav from './components/Nav';
import Rules from './components/how/How';
import { BrowserRouter as Router,
  Switch, Routes, Route, Link } from "react-router-dom";
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
