import React, {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bulma/css/bulma.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Components/Landing-page';
import HomePage from './Components/Home';
import NotFoundPage from './Components/404';
import LoginPage from './Components/Compte/LogIn';
import SignUpPage from './Components/Compte/SignUp';



function App() {
  const [test, setTest] = useState("je suis un test");

  const [token, setToken] = useState(
    localStorage.getItem('token') || '0'
  );
  const [user, setUser] = useState(
    localStorage.getItem('user') || 'Visiteur'
  );
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem('loggedIn') || JSON.stringify(false)
  );
  const [userId, setUserId] = useState(
    localStorage.getItem('userId') || '0'
  );

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token]);
  useEffect(() => {
    localStorage.setItem('user', user)
  }, [user]);
  useEffect(() => {
    localStorage.setItem('loggedIn', loggedIn)
  }, [loggedIn]);
  useEffect(() => {
    localStorage.setItem('userId', userId)
  }, [userId]);



  return (
    <div className="App">
 
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/connexion" element={<LoginPage test={test} setLoggedIn={setLoggedIn} setToken={setToken} setUser={setUser} setUserId={setUserId}
        loggedIn={loggedIn} user={user} />} />
        <Route exact path="/inscription" element={<SignUpPage />} />




        
        <Route path='*' element={<NotFoundPage />} />
      </Routes>


    </div>
  );
}

export default App;
