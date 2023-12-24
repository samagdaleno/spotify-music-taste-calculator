import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home";
import About from "./pages/about";
import SpotifyCallback from './components/spotifyCallback';
import SpotifyAuth from './components/spotifyAuth';
import './styles/App.css';
import AppLayout from './components/layout/appLayout';

function App ()  {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/callback" Component={SpotifyCallback} />
          <Route path="/login" Component={SpotifyAuth} />
          <Route path="/about" Component={About} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
