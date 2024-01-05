// import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import PKCEUtils from '../utils/pkce.utils';

const About: React.FC = () => {
  console.log("About.tsx");
  console.log("FUCK")
  console.log(process.env.REACT_APP_SPOTIFY_REDIRECT_URI);
  console.log(process.env.REACT_APP_SPOTIFY_CLIENT_ID);
  useEffect(() => {
    const authenticateSpotify = async () => {
      const codeVerifier = PKCEUtils.generateCodeVerifier();
      window.localStorage.setItem('code_verifier', codeVerifier);

      const codeChallenge = await PKCEUtils.generateCodeChallenge(codeVerifier);
      const clientId = `${process.env.REACT_APP_SPOTIFY_CLIENT_ID}`;
      const redirectUri = `${process.env.REACT_APP_SPOTIFY_REDIRECT_URI}`;

      const scope = `
      user-read-private
      user-read-email
      user-library-read
      user-top-read
      `;
      const authUrl = new URL("https://accounts.spotify.com/authorize")

      const params = {
        response_type: 'code',
        client_id: clientId,
        scope,
        code_challenge_method: 'S256',
        code_challenge: codeChallenge,
        redirect_uri: redirectUri,
      }

      authUrl.search = new URLSearchParams(params).toString();

      window.location.href = authUrl.toString();
    };

    authenticateSpotify();
  }, []);

  return <div>Redirecting to Spotify...</div>;
};

export default About;