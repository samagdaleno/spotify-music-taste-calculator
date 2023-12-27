import axios from 'axios';
import Track from '../interfaces/spotify/track';
import UserData from '../interfaces/user.data';
import { getLSToken, setLSTrackListData, setLSUserData } from '../repos/spotify.repo';

const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1'; 


export const setUserData = async (): Promise<void> => {
  try {
    const accessToken = getLSToken();
    console.log('accessToken', accessToken);
    const response = await axios.get(`${SPOTIFY_API_BASE_URL}/me`, { // TODO MAYBE EXTRACT REST CALL LOGIC TO ITS OWN SERVICE
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const userData: UserData = {
      id: response.data.id,
      displayName: response.data.display_name,
      imageUrl: response.data.images[0].url,
    };

    setLSUserData(userData);
  } catch (error) {
    console.error('Error getting user profile:', error);
    throw error;
  }
}

export const setTopTracksListData = async (): Promise<void> => {
  const accessToken = getLSToken();
  const tracksShortTerm = await getTopTracks(accessToken, 'short_term');
  const tracksMediumTerm = await getTopTracks(accessToken, 'medium_term');
  const tracksLongTerm = await getTopTracks(accessToken, 'long_term');

  setLSTrackListData(tracksShortTerm, 'short_term');
  setLSTrackListData(tracksMediumTerm, 'medium_term');
  setLSTrackListData(tracksLongTerm, 'long_term');
};

const getTopTracks = async (accessToken: string, timeRange: string): Promise<Track[]> => {
  try {
    const response = await axios.get(`${SPOTIFY_API_BASE_URL}/me/top/tracks`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        time_range: timeRange,
        limit: 20,
      },
    });

    console.log('response', response);

    const tracks: Track[] = response.data.items.map((item: any) => ({
      id: item.id,
      name: item.name,
      artist: item.artists[0].name,
      album: item.album.name,
      imageUrl: item.album.images[0].url,
      popularity: item.popularity,
      releaseDate: item.album.release_date,
    }));

    return tracks;
  } catch (error) {
    console.error('Error getting top tracks:', error);
    throw error;
  }
};

export const getSavedTracks = async (accessToken: string): Promise<Track[]> => {
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