import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Links from './components/header/Links';

function App() {
  return (
    <div className="App">
      <header>
        <img src={require('./assets/logo.png')} alt='header-logo'></img>
        <Links></Links>
      </header>
      <Routes>
        <Route path='/' element={<p>Welcome</p>}></Route>
      </Routes>
    </div>
  );
}

export default App;
