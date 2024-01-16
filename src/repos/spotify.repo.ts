import AudioFeaturesResponse from "../interfaces/responses/audioFeaturesResponse";
import Artist from "../interfaces/spotify/artist";
import Track from "../interfaces/spotify/track";
// import TrackDetails from "../interfaces/spotify/trackDetails";
import UserData from "../interfaces/user.data";
import { getRefreshedToken } from "../services/token.service";


export const setLSUserData = (userData: UserData) : void => {
    localStorage.setItem('user_id', JSON.stringify(userData.id));
    localStorage.setItem('user_display_name', JSON.stringify(userData.displayName));
    localStorage.setItem('user_image_url', JSON.stringify(userData.imageUrl));
}

export const setLSTokensData = (accessToken: string, refreshToken: string, tokenExpiration: string) : void => { // TODO: Convert this to interface
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);

    const seconds: number = parseInt(tokenExpiration, 10);
    const currentTime: Date = new Date();
    const expirationDate: Date = new Date(currentTime.getTime() + seconds * 1000);
    console.log("Token Expiration Date:", expirationDate);
    console.log("Current Time:", currentTime);

    localStorage.setItem('token_expiration', JSON.stringify(expirationDate));
}

export const setLSTrackListData = (trackList: Track[], timeRange: string) : void => {
    localStorage.setItem(`${timeRange}_track_List`, JSON.stringify(trackList));
}

export const setLSArtistsData = (artistList: Artist[], timeRange: string) : void => {
    localStorage.setItem(`${timeRange}_artist_List`, JSON.stringify(artistList));
}

export const getLSTracksListData = (timeRange: string): Track[] => {
    return JSON.parse(localStorage.getItem(`${timeRange}_track_List`) || "[]");
}

export const getLSArtistsData = (timeRange: string): Artist[] => {
    return JSON.parse(localStorage.getItem(`${timeRange}_artist_List`) || "[]");
}

export const setLSAverageAudioFeatures = (averageAudioFeatures: AudioFeaturesResponse, timeRange: string) => { // TODO: WHAT THE FUCK ARE YOU DOING?
    localStorage.setItem(`${timeRange}_average_track_features`, JSON.stringify(averageAudioFeatures));
}

export const getLSAverageAudioFeatures = (timeRange: string): AudioFeaturesResponse => {
    return JSON.parse(localStorage.getItem(`${timeRange}_average_track_features`) || "{}");
}

export const getLSUserData = (): UserData => {
    return {
        id: JSON.parse(localStorage.getItem('user_id') || "undefined"),
        displayName: JSON.parse(localStorage.getItem('user_display_name') || "undefined"),
        imageUrl: JSON.parse(localStorage.getItem('user_image_url') || "undefined"),
    };
}

export const getLSToken = async (): Promise<string> => {
    if (isTokenExpired()) {
        await getRefreshedToken();
    }
    return localStorage.getItem('access_token') || "undefined";
}

export const getLSTrackById = (trackId: string): Track => {
    const trackList: Track[] = getLSTracksListData("short_term").concat(getLSTracksListData("medium_term")).concat(getLSTracksListData("long_term"));
    return trackList.find((track: Track) => track.id === trackId) || {} as Track;
}

const isTokenExpired = (): boolean => {
    const expirationDate: Date = getLSTokenExpiration();
    const currentTime: Date = new Date();
    return expirationDate < currentTime;
}

const getLSTokenExpiration = (): Date => {
    return new Date(JSON.parse(localStorage.getItem('token_expiration') || "undefined"));
}


