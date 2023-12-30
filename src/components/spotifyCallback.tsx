import { Box, CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../services/token.service';
import { setTopTracksLists, setUserData, setTopTrackAnalytics } from '../services/spotify.service';

const SpotifyCallback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      await getToken();
      await setUserData();
      await setTopTracksLists();
      await setTopTrackAnalytics();

      navigate('/');
    };
    handleCallback();
  }, [navigate]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <CircularProgress />
    </Box>
  );
};

export default SpotifyCallback;
