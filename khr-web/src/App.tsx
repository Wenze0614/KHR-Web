// import { useContext } from 'react';
import styles from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Header from './components/header/Header';
import Home from './pages/Home'
import Footer from './components/footer/Footer';
import Adoption from './pages/Adoption';
// import SignIn from './pages/SignIn';
// import Profile from './pages/Profile';
// import AuthContext from './store/auth-context';
// import ResetPassword from './pages/ResetPassword';
import Donation from './pages/Donation';
import Sponsor from './pages/Sponsor';
const client = new ApolloClient({
  uri: 'https://khr-strapi.herokuapp.com/graphql',
  cache: new InMemoryCache()
})


// const client = new ApolloClient({
//   uri: 'http://localhost:1337/graphql',
//   cache: new InMemoryCache()
// })

function App() {
  // const authCtx = useContext(AuthContext)
  return (
    <ApolloProvider client={client}>
      <div className={styles.app}>
        <Header></Header>
        {/* <a className={styles["vol-button"]} href='Volunteer-Application.pdf' download="volunteer-form.pdf">Apply for volunteer</a> */}
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/adoption' element={<Adoption />}></Route>
          <Route path='/donation' element={<Donation/>}></Route>
          <Route path='/sponsorship' element={<Sponsor/>}></Route>
          {/* {!authCtx.isLoggedIn && <Route path='/signIn' element={<SignIn />}></Route>}
          {authCtx.isLoggedIn && <Route path='/profile' element={<Profile />}></Route>}
          <Route path="/resetPassword" element={<ResetPassword></ResetPassword>}></Route> */}
          <Route path='*' element={<Home />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </ApolloProvider>
  );
}

export default App;
