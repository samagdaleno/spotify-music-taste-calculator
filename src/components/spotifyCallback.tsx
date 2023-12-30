import { Box, CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../services/token.service';
import { setTopTracksListData, setUserData } from '../services/spotify.service';

const SpotifyCallback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      console.log("Callback");
      await getToken();
      await setUserData();
      await setTopTracksListData();

      navigate('/');
    };
    handleCallback();
  }, [navigate]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
};

export default SpotifyCallback;
