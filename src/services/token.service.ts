import axios from 'axios';
import { setLSTokensData } from '../repos/spotify.repo';

export const getToken = async (): Promise<string> => {
  console.log("Getting token...");

  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');

  const codeVerifier = localStorage.getItem('code_verifier');
  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID || '';
  const redirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI || '';

  const payload = new URLSearchParams({
    client_id: clientId,
    grant_type: 'authorization_code',
    code: code || '',
    redirect_uri: redirectUri,
    code_verifier: codeVerifier || '',
  });

  try {
    const response = await axios.post(tokenUrl, payload, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const responseBody = response.data;
    setLSTokensData(responseBody.access_token, responseBody.refresh_token);
    return responseBody.access_token;
  } catch (error) {
    console.error('Error during token call:', error);
  }
  return '';
}


export const getRefreshToken = async (): Promise<void> => {
  try {
    const refreshToken = `${localStorage.getItem('refresh_token')}`;
    const url = 'https://accounts.spotify.com/api/token';
    const clientId = `${process.env.REACT_APP_SPOTIFY_CLIENT_ID}`;

    const payload = new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: clientId,
    });

    const response = await axios.post(url, payload, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    setLSTokensData(response.data.access_token, response.data.refresh_token);
    // localStorage.setItem('access_token', response.data.access_token);
    // localStorage.setItem('refresh_token', response.data.refresh_token);
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw error;
  }
};