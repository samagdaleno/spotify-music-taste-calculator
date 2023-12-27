import Track from "../interfaces/spotify/track";
import UserData from "../interfaces/user.data";

export const setLSUserData = (userData: UserData) : void => {
    localStorage.setItem('user_id', JSON.stringify(userData.id));
    localStorage.setItem('user_display_name', JSON.stringify(userData.displayName));
    localStorage.setItem('user_image_url', JSON.stringify(userData.imageUrl));
}

export const setLSTokensData = (accessToken: string, refreshToken: string) : void => {
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);
}

export const setLSTrackListData = (trackList: Track[], timeRange: string) : void => {
    localStorage.setItem(`${timeRange}_track_List`, JSON.stringify(trackList));
}

export const getLSTracksListData = (timeRange: string): Track[] => {
    return JSON.parse(localStorage.getItem(`${timeRange}_track_List`) || "[]");
}

export const getLSUserData = (): UserData => {
    return {
        id: JSON.parse(localStorage.getItem('user_id') || "undefined"),
        displayName: JSON.parse(localStorage.getItem('user_display_name') || "undefined"),
        imageUrl: JSON.parse(localStorage.getItem('user_image_url') || "undefined"),
    };
}

export const getLSToken = (): string => {
    return localStorage.getItem('access_token') || "undefined";
}

