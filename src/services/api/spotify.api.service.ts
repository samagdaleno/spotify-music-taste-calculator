import axios from 'axios';
import { getLSToken } from '../../repos/spotify.repo';
import AudioFeaturesResponse from '../../interfaces/responses/audioFeaturesResponse';

const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';

// eslint-disable-next-line
export const getUserData = async (): Promise<any> => {
    try {
        const accessToken = await getLSToken();
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

// eslint-disable-next-line
export const getTopTracks = async (timeRange: string): Promise<any> => {
    try {
        const accessToken = await getLSToken();
        const response = await axios.get(`${SPOTIFY_API_BASE_URL}/me/top/tracks`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: {
                time_range: timeRange,
                limit: 20,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error getting top tracks:', error);
        throw error;
    }
};

export const getTopArtists = async (timeRange: string): Promise<any> => {
    try {
        const accessToken = await getLSToken();
        const response = await axios.get(`${SPOTIFY_API_BASE_URL}/me/top/artists`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: {
                time_range: timeRange,
                limit: 50,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error getting top artists:', error);
        throw error;
    }
}

// eslint-disable-next-line
export const getTracksAudioFeatures = async (tracksIds: string[]): Promise<any> => {
    try {
        const accessToken = await getLSToken();
        const response = await axios.get(`${SPOTIFY_API_BASE_URL}/audio-features`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: {
                ids: tracksIds.join(','),
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error getting tracks audio features:', error);
        throw error;
    }
};

export const getSingleTrackAudioFeatures = async (trackId: string): Promise<AudioFeaturesResponse> => {
    try {
        const accessToken = await getLSToken();
        const response = await axios.get(`${SPOTIFY_API_BASE_URL}/audio-features/${trackId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error getting single track audio features:', error);
        throw error;
    }
};

// eslint-disable-next-line
export const getSavedTracks = async (accessToken: string): Promise<any> => {
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