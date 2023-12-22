import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Callback from './services/spotify.login.service';
import Home from "./pages/home";
import './styles/App.css';

const App: React.FC = () => {
  return(
    <Router>
      <Routes>
        <Route path="/callback" Component={Callback} />
        <Route path="/" Component={Home}/>
      </Routes>
    </Router>
  );
};

export default App;
