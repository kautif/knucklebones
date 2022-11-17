import './App.css';
import GameBoard from './components/GameBoard';
import React from "react";
import Nav from './components/Nav';
import How from './components/how/How';
import { BrowserRouter as Router,
  Switch, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Title Screen</h1>}/>
      <Route path="/how" element={<How />}/>
      <Route path="/play" element={<GameBoard />}/>
    </Routes>
  );
}

export default App;
