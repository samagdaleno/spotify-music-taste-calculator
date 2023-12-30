import axios from 'axios';
import Track from '../../interfaces/spotify/track';
import UserData from '../../interfaces/user.data';
import { getLSToken, setLSTrackListData, setLSUserData } from '../../repos/spotify.repo';

const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';


export const setUserData = async (): Promise<string> => {
    try {
        const accessToken = getLSToken();
        console.log('accessToken', accessToken);
        const response = await axios.get(`${SPOTIFY_API_BASE_URL}/me`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        
        return response.data
    } catch (error) {
        console.error('Error getting user profile:', error);
        throw error;
    }
}

export const getTopTracks = async (accessToken: string, timeRange: string): Promise<string> => {
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
        return response.data;
    } catch (error) {
        console.error('Error getting top tracks:', error);
        throw error;
    }
};

export const getSavedTracks = async (accessToken: string): Promise<string> => {
    try {
        const response = await axios.get(`${SPOTIFY_API_BASE_URL}/me/tracks`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error getting saved tracks:', error);
        throw error;
    }
};