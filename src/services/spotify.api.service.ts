// spotifyService.ts
import axios from 'axios';

const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';

interface Track {
  name: string;
  artist: string;
  album: string;
  imageUrl: string;
}

const getTopTracks = async (accessToken: string): Promise<Track[]> => {
  try {
    const response = await axios.get(`${SPOTIFY_API_BASE_URL}/me/top/tracks`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const tracks: Track[] = response.data.items.map((item: any) => ({
      name: item.name,
      artist: item.artists[0].name,
      album: item.album.name,
      imageUrl: item.album.images[0].url,
    }));

    return tracks;
  } catch (error) {
    console.error('Error getting top tracks:', error);
    throw error;
  }
};

const getSavedTracks = async (accessToken: string): Promise<Track[]> => {
  try {
    const response = await axios.get(`${SPOTIFY_API_BASE_URL}/me/tracks`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const tracks: Track[] = response.data.items.map((item: any) => ({
      name: item.track.name,
      artist: item.track.artists[0].name,
      album: item.track.album.name,
      imageUrl: item.track.album.images[0].url,
    }));

    return tracks;
  } catch (error) {
    console.error('Error getting saved tracks:', error);
    throw error;
  }
};

export { getTopTracks, getSavedTracks };
