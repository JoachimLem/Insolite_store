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
  return (
    <div className="App">
 
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/connexion" element={<LoginPage />} />
        <Route exact path="/inscription" element={<SignUpPage />} />




        
        <Route path='*' element={<NotFoundPage />} />
      </Routes>


    </div>
  );
}

export default App;
