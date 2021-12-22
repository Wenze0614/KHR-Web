import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' ></Route>
      </Routes>
    </div>
  );
}

export default App;
