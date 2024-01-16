import Artist from '../interfaces/spotify/artist';
import Track from '../interfaces/spotify/track'; // TODO: Maybe i shouldn't be importing this here ? 
import TrackDetails from '../interfaces/spotify/trackDetails';
import UserData from '../interfaces/user.data'; // TODO: Maybe i shouldn't be importing this here ? 
import { setLSTrackListData, setLSArtistsData, setLSUserData, setLSAverageAudioFeatures, getLSTracksListData, getLSAverageAudioFeatures } from '../repos/spotify.repo';
import { calculateAverageTrackFeatures } from '../utils/track.features.utils';
import { getUserData, getTopTracks, getTopArtists, getTracksAudioFeatures, getSingleTrackAudioFeatures } from './api/spotify.api.service';
import { mapAudioFeaturesResponseToTrackFeatures } from './mappers/mapAudioFeaturesResponseToTrackFeatures ';

export const setUserData = async (): Promise<void> => {
  try {
    console.log('Getting user profile...');
    const userData = userDataMapper(await getUserData());

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

export const setTopArtistsLists = async (): Promise<void> => {
  console.log('Getting top artists information...');
  const artistsShortTerm = artistsMapper(await getTopArtists('short_term'));
  const artistsMediumTerm = artistsMapper(await getTopArtists('medium_term'));
  const artistsLongTerm = artistsMapper(await getTopArtists('long_term'));

  setLSArtistsData(artistsShortTerm, 'short_term');
  setLSArtistsData(artistsMediumTerm, 'medium_term');
  setLSArtistsData(artistsLongTerm, 'long_term');
}

export const setTopTrackAnalytics = async (): Promise<void> => {
  console.log('Getting top tracks analytics...');

  const tracksShortTermIds = getLSTrackListIds('short_term');
  const tracksMediumTermIds = getLSTrackListIds('medium_term');
  const tracksLongTermIds = getLSTrackListIds('long_term');

  const tracksShortTermFeatures = await getTracksAudioFeatures(tracksShortTermIds);
  const tracksMediumTermFeatures = await getTracksAudioFeatures(tracksMediumTermIds);
  const tracksLongTermFeatures = await getTracksAudioFeatures(tracksLongTermIds);

  const averageTrackFeaturesShortTerm = calculateAverageTrackFeatures(tracksShortTermFeatures.audio_features);
  const averageTrackFeaturesMediumTerm = calculateAverageTrackFeatures(tracksMediumTermFeatures.audio_features);
  const averageTrackFeaturesLongTerm = calculateAverageTrackFeatures(tracksLongTermFeatures.audio_features);

  setLSAverageAudioFeatures(averageTrackFeaturesShortTerm, 'short_term');
  setLSAverageAudioFeatures(averageTrackFeaturesMediumTerm, 'medium_term');
  setLSAverageAudioFeatures(averageTrackFeaturesLongTerm, 'long_term');
}

export const getSingleTrackFeaturesById = async (trackId: string): Promise<TrackDetails> => {
  // TODO: Error Handling
  const auidoFeaturesResponse = await getSingleTrackAudioFeatures(trackId);
  const trackFeatures = mapAudioFeaturesResponseToTrackFeatures(auidoFeaturesResponse);
  return trackFeatures;
}

export const getAverageTrackFeatures = (timeRange: string): TrackDetails => {
  const averageAudioFeaturesResponse = getLSAverageAudioFeatures(timeRange);
  const averageTrackFeatures = mapAudioFeaturesResponseToTrackFeatures(averageAudioFeaturesResponse);
  return averageTrackFeatures;
}

// eslint-disable-next-line
const trackMapper = (tracksResponse: any): Track[] => { // TODO: Find out where to place mappers
  try {
    let position = 1;// eslint-disable-next-line
    const tracks: Track[] = tracksResponse.items.map((item: any) => ({
      position: position++,
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

// eslint-disable-next-line
const artistsMapper = (artistsResponse: any): Artist[] => { // TODO: Find out where to place mappers
  try {
    let position = 1;
    // eslint-disable-next-line
    const artists: Artist[] = artistsResponse.items.map((item: any) => ({
      position: position++,
      id: item.id,
      name: item.name,
      imageUrl: item.images[0].url,
      popularity: item.popularity,
    }));

    return artists;
  } catch (error) {
    console.error('Error mapping top artists:', error);
    throw error;
  }
}

// eslint-disable-next-line
const userDataMapper = (userDataResponse: any): UserData => { // TODO: Find out where to place mappers
  try {
    //check if user has an image
    if (userDataResponse.images.length === 0) {
      userDataResponse.images[0] = { url: '' };
    }

    const userData: UserData = {
      id: userDataResponse.id,
      displayName: userDataResponse.display_name,
      imageUrl: userDataResponse.images[0].url,
    };

    return userData;
  } catch (error) {
    console.error('Error mapping user data:', error);
    throw error;
  }
}

const getLSTrackListIds = (timeRange: string): string[] => { // TODO: Find out where to place this
  const trackList: Track[] = getLSTracksListData(timeRange);
  return trackList.map((track: Track) => track.id);
}