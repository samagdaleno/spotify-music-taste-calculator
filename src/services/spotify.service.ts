import Track from '../interfaces/spotify/track'; // TODO: Maybe i shouldn't be importing this here ? 
import UserData from '../interfaces/user.data'; // TODO: Maybe i shouldn't be importing this here ? 
import { setLSTrackListData, setLSUserData, setAverageTrackFeatures, getLSTracksListData } from '../repos/spotify.repo';
import { calculateAverageTrackFeatures } from '../utils/track.features.utils';
import { getUserData, getTopTracks, getTracksAudioFeatures } from './api/spotify.api.service';

export const setUserData = async (): Promise<void> => {
  try {
    console.log('Getting user profile...');
    const response = await getUserData();

    const userData: UserData = { // TODO: Get this logic out of here and find out where it belongs
      id: response.id,
      displayName: response.display_name,
      imageUrl: response.images[0].url,
    };

    setLSUserData(userData);
  } catch (error) {
    console.error('Error setting user profile:', error);
    throw error;
  }
}

export const setTopTracksLists = async (): Promise<void> => {
  console.log('Getting top tracks information...');
  const tracksShortTerm = trackMapper(await getTopTracks('short_term'));
  const tracksMediumTerm = trackMapper(await getTopTracks('medium_term'));
  const tracksLongTerm = trackMapper(await getTopTracks('long_term'));

  setLSTrackListData(tracksShortTerm, 'short_term');
  setLSTrackListData(tracksMediumTerm, 'medium_term');
  setLSTrackListData(tracksLongTerm, 'long_term');
};

export const setTopTrackAnalytics = async (): Promise<void> => {
  console.log('Getting top tracks analytics...');

  const tracksShortTermIds = getTrackListIds('short_term');
  const tracksMediumTermIds = getTrackListIds('medium_term');
  const tracksLongTermIds = getTrackListIds('long_term');

  const tracksShortTermFeatures = await getTracksAudioFeatures(tracksShortTermIds);
  const tracksMediumTermFeatures = await getTracksAudioFeatures(tracksMediumTermIds);
  const tracksLongTermFeatures = await getTracksAudioFeatures(tracksLongTermIds);
  
  console.log('Calculating average short term track features...');
  const averageTrackFeaturesShortTerm = calculateAverageTrackFeatures(tracksShortTermFeatures.audio_features);
  console.log('Calculating average medium term track features...');
  const averageTrackFeaturesMediumTerm = calculateAverageTrackFeatures(tracksMediumTermFeatures.audio_features);
  console.log('Calculating average long term track features...');
  const averageTrackFeaturesLongTerm = calculateAverageTrackFeatures(tracksLongTermFeatures.audio_features);

  setAverageTrackFeatures(averageTrackFeaturesShortTerm, 'short_term');
  setAverageTrackFeatures(averageTrackFeaturesMediumTerm, 'medium_term');
  setAverageTrackFeatures(averageTrackFeaturesLongTerm, 'long_term');
}

const trackMapper = (tracksResponse: any): Track[] => { // TODO: Find out where to place mappers
  try {
    const tracks: Track[] = tracksResponse.items.map((item: any) => ({
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
    console.error('Error mapping top tracks:', error);
    throw error;
  }
};

const getTrackListIds = (timeRange: string): string[] => { // TODO: Find out where to place this
  const trackList: Track[] = getLSTracksListData(timeRange);
  return trackList.map((track: Track) => track.id);
}
