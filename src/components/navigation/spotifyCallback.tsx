import { Box, CircularProgress, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../services/token.service';
import { setTopTracksLists, setUserData, setTopTrackAnalytics } from '../../services/spotify.service';

const SpotifyCallback: React.FC = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = React.useState<string>('');

  useEffect(() => {
    const handleCallback = async () => {
      setProgress('Getting token...');
      await getToken(); // TODO: This is calling the api service directly, should be calling the token service
      setProgress('Getting user data...');
      await setUserData();
      setProgress('Getting top tracks...');
      await setTopTracksLists();
      setProgress('Getting top track analytics...');
      await setTopTrackAnalytics();
      setProgress('Redirecting...');

      navigate('/');
    };
    handleCallback();
  }, [navigate]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'justify', alignItems: 'center' }}>
      <CircularProgress />
      <Typography variant="h5" component="h2">
        {progress}
      </Typography>
    </Box>
  );
};

export default SpotifyCallback;
