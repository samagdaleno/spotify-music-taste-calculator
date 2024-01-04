import { Box, CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../services/token.service';
import { setTopTracksLists, setUserData, setTopTrackAnalytics } from '../services/spotify.service';

const SpotifyCallback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      await getToken(); // TODO: This is calling the api service directly, should be calling the token service
      await setUserData();
      await setTopTracksLists();
      await setTopTrackAnalytics();

      navigate('/');
    };
    handleCallback();
  }, [navigate]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'justify', alignItems: 'center' }}>
      <CircularProgress />
    </Box>
  );
};

export default SpotifyCallback;
