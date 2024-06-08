// import axios from 'axios';
import { React } from 'react';
import Login from './views/login'
import SignupForm from './views/signup'
import Search from './views/search'
// import BreweryInfo from './views/breweryInfo'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<SignupForm />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}
export default App;