import TrackDetails from '../../interfaces/spotify/trackDetails';
import AudioFeaturesResponse from '../../interfaces/responses/audioFeaturesResponse';

export const mapAudioFeaturesResponseToTrackFeatures = (trackFeaturesResponse: AudioFeaturesResponse): TrackDetails => {
  const trackFeatures: TrackDetails = {
    acousticness: trackFeaturesResponse.acousticness, // indivuals convertions/validation needed ?
    danceability: trackFeaturesResponse.danceability,
    duration: millisecondsToDurationconverter(trackFeaturesResponse.duration_ms), //convertion needed
    energy: trackFeaturesResponse.energy,
    id: trackFeaturesResponse.id,
    instrumentalness: trackFeaturesResponse.instrumentalness,
    key: numberToKeyConverter(trackFeaturesResponse.key), //convertion needed
    liveness: trackFeaturesResponse.liveness,
    decibels: loudnessToDecibelsConverter(trackFeaturesResponse.loudness), //convertion needed
    signature: modeToSignatureConverter(trackFeaturesResponse.mode), //convertion needed
    speechiness: trackFeaturesResponse.speechiness,
    bpm: tempoToBpmConverter(trackFeaturesResponse.tempo), //convertion needed
    time_signature: timeSignatureConverter(trackFeaturesResponse.time_signature), //convertion needed
    valence: trackFeaturesResponse.valence,
  };
  return trackFeatures;
};


const millisecondsToDurationconverter = (ms: number): string => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return `${minutes}:${(Number(seconds) < 10 ? '0' : '')}${seconds}`;
}

const numberToKeyConverter = (key: number): string => { // TODO: TEST CORRECT RESULT
    const keys = ['C', 'C♯/D♭', 'D', 'D♯/E♭', 'E', 'F', 'F♯/G♭', 'G', 'G♯/A♭', 'A', 'A♯/B♭', 'B'];
    return keys[key];
} 

const loudnessToDecibelsConverter = (loudness: number): string => { // TODO: TEST CORRECT RESULT
    return `${loudness} dB`;
}

const modeToSignatureConverter = (mode: number): string => { // TODO: TEST CORRECT RESULT
    return mode === 1 ? 'Major' : 'Minor';
}

const tempoToBpmConverter = (tempo: number): string => { // TODO: TEST CORRECT RESULT
    return `${tempo} BPM`;
}

const timeSignatureConverter = (timeSignature: number): string => { // TODO: TEST CORRECT RESULT
    return `${timeSignature}/4`;
}
