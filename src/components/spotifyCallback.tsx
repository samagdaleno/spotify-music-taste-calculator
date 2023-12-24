import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SpotifyCallback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      console.log("Callback");
      const urlParams = new URLSearchParams(window.location.search);
      let code = urlParams.get('code')!;

      let codeVerifier = localStorage.getItem('code_verifier')!;
      const tokenUrl = 'https://accounts.spotify.com/api/token';
      const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID!;
      const redirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI!;

      const payload = {
        method: 'POST' as const,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          client_id: clientId,
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: redirectUri,
          code_verifier: codeVerifier,
        }),
      };
      try {
        const response = await fetch(tokenUrl, payload);
        const responseBody = await response.json();

        localStorage.setItem('access_token', responseBody.access_token);
        localStorage.setItem('refresh_token', responseBody.refresh_token);
        navigate('/');
      } catch (error) {
        console.error('Error during callback:', error);
      }
    };
    handleCallback();
  }, [navigate]);

  return <div>Processing...</div>;
};

export default SpotifyCallback;
