import axios from 'axios';

export const getRefreshToken = async (): Promise<void> => {
  try {
    const refreshToken = localStorage.getItem('refresh_token');
    const url = 'https://accounts.spotify.com/api/token';
    const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID!;

    const payload = new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken!,
      client_id: clientId,
    });

    const response = await axios.post(url, payload, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    localStorage.setItem('access_token', response.data.access_token);
    localStorage.setItem('refresh_token', response.data.refresh_token);
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw error;
  }
};