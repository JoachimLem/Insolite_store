import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bulma/css/bulma.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Components/Landing-page';
import HomePage from './Components/Home';



function App() {
  return (
    <div className="App">
 


      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<HomePage />} />

      </Routes>


    </div>
  );
}

export default App;
