import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home";
import About from "./pages/about";
import SpotifyCallback from './components/navigation/spotifyCallback';
// import SpotifyAuth from './components/navigation/spotifyAuth';
import './styles/App.css';
import Layout from './components/layout/layout';
import Login from './pages/login';

function App ()  {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/callback" Component={SpotifyCallback} />
          <Route path="/login" Component={Login} />
          <Route path="/about" Component={About} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
