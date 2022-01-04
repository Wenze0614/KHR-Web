import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Header from './components/header/Header';
import Home from './pages/Home'
import Footer from './components/footer/Footer';
import Adoption from './pages/Adoption';
import SignIn from './pages/SignIn';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/adoption' element={<Adoption />}></Route>
          <Route path='/signIn' element={<SignIn/>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </ApolloProvider>
  );
}

export default App;
