import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home";
import About from "./pages/about";
import SpotifyCallback from './components/navigation/spotifyCallback';
import SpotifyAuth from './components/navigation/spotifyAuth';
import './styles/App.css';
import Layout from './components/layout/layout';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
// import Login from './pages/login';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/callback" Component={SpotifyCallback} />
            <Route path="/login" Component={SpotifyAuth} />
            <Route path="/about" Component={About} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
