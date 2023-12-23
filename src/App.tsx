import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home";
import SpotifyCallback from './components/spotifyCallback';
import SpotifyAuth from './components/spotifyAuth';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/callback" Component={SpotifyCallback} />
          <Route path="/login" Component={SpotifyAuth} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
