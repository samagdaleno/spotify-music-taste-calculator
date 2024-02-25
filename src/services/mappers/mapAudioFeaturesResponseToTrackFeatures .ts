import TrackDetails from '../../interfaces/spotify/trackDetails';
import AudioFeaturesResponse from '../../interfaces/responses/audioFeaturesResponse';
import { getLSTrackById } from '../../repos/spotify.repo';
import Track from '../../interfaces/spotify/track';

export const mapAudioFeaturesResponseToTrackFeatures = (trackFeaturesResponse: AudioFeaturesResponse): TrackDetails => {
  const selectedTrack: Track = getLSTrackById(trackFeaturesResponse.id);
  const trackFeatures: TrackDetails = {
    track_id: trackFeaturesResponse.id,
    track_name: selectedTrack.name,
    track_artist: selectedTrack.artist,
    track_album: selectedTrack.album,
    track_image_url: selectedTrack.imageUrl,
    acousticness: trackFeaturesResponse.acousticness,
    danceability: numericToPercentageConverter(trackFeaturesResponse.danceability),
    duration: millisecondsToDurationconverter(trackFeaturesResponse.duration_ms),
    energy: numericToPercentageConverter(trackFeaturesResponse.energy),
    instrumentalness: trackFeaturesResponse.instrumentalness,
    key: numberToKeyConverter(trackFeaturesResponse.key),
    liveness: trackFeaturesResponse.liveness,
    decibels: loudnessToDecibelsConverter(trackFeaturesResponse.loudness),
    signature: modeToSignatureConverter(trackFeaturesResponse.mode),
    speechiness: trackFeaturesResponse.speechiness,
    bpm: tempoToBpmConverter(trackFeaturesResponse.tempo),
    time_signature: timeSignatureConverter(trackFeaturesResponse.time_signature),
    valence: numericToPercentageConverter(trackFeaturesResponse.valence),
  };
  return trackFeatures;
};


const millisecondsToDurationconverter = (ms: number): string => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return `${minutes}:${(Number(seconds) < 10 ? '0' : '')}${seconds}`;
}

const numericToPercentageConverter = (number: number): number => { 
  return parseFloat((number * 100).toFixed(2));
}

const numberToKeyConverter = (key: number): string => {
    const keys = ['C', 'C♯/D♭', 'D', 'D♯/E♭', 'E', 'F', 'F♯/G♭', 'G', 'G♯/A♭', 'A', 'A♯/B♭', 'B'];
    return keys[key];
} 

const loudnessToDecibelsConverter = (loudness: number): string => {
    return `${loudness.toFixed(2)} dB`;
}

const modeToSignatureConverter = (mode: number): string => {
    return mode === 1 ? 'Major' : 'Minor';
}

const tempoToBpmConverter = (tempo: number): string => {
    return `${tempo.toFixed(2)} BPM`;
}

const timeSignatureConverter = (timeSignature: number): string => { 
    return `${timeSignature}/4`;
}
