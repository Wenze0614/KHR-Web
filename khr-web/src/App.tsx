import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home'
import Footer from './components/footer/Footer';
import Adoption from './pages/Adoption';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/adoption' element={<Adoption/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
