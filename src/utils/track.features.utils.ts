import AudioFeaturesResponse from "../interfaces/responses/audioFeaturesResponse";
import TrackDetails from "../interfaces/spotify/trackDetails";

export const calculateAverageTrackFeatures = (audioFeaturesResponse: AudioFeaturesResponse[]): AudioFeaturesResponse => {
    try {
        const averageTrackFeatures: AudioFeaturesResponse = {
            id: '',
            acousticness: 0,
            danceability: 0,
            duration_ms: 0,
            energy: 0,
            instrumentalness: 0,
            key: 0,
            liveness: 0,
            loudness: 0,
            mode: 0,
            speechiness: 0,
            tempo: 0,
            time_signature: 0,
            valence: 0,
            analysis_url: "",
            track_href: "",
            type: "",
            uri: ""
        };

        audioFeaturesResponse.forEach((trackFeatures: AudioFeaturesResponse) => {
            averageTrackFeatures.acousticness += trackFeatures.acousticness;
            averageTrackFeatures.danceability += trackFeatures.danceability;
            averageTrackFeatures.duration_ms += trackFeatures.duration_ms;
            averageTrackFeatures.energy += trackFeatures.energy;
            averageTrackFeatures.instrumentalness += trackFeatures.instrumentalness;
            averageTrackFeatures.key += trackFeatures.key;
            averageTrackFeatures.liveness += trackFeatures.liveness;
            averageTrackFeatures.loudness += trackFeatures.loudness;
            averageTrackFeatures.mode += trackFeatures.mode;
            averageTrackFeatures.speechiness += trackFeatures.speechiness;
            averageTrackFeatures.tempo += trackFeatures.tempo;
            averageTrackFeatures.time_signature += trackFeatures.time_signature;
            averageTrackFeatures.valence += trackFeatures.valence;
        });

        averageTrackFeatures.acousticness /= audioFeaturesResponse.length;
        averageTrackFeatures.danceability /= audioFeaturesResponse.length;
        averageTrackFeatures.duration_ms /= audioFeaturesResponse.length;
        averageTrackFeatures.energy /= audioFeaturesResponse.length;
        averageTrackFeatures.instrumentalness /= audioFeaturesResponse.length;
        averageTrackFeatures.key /= audioFeaturesResponse.length;
        averageTrackFeatures.liveness /= audioFeaturesResponse.length;
        averageTrackFeatures.loudness /= audioFeaturesResponse.length;
        averageTrackFeatures.mode /= audioFeaturesResponse.length;
        averageTrackFeatures.speechiness /= audioFeaturesResponse.length;
        averageTrackFeatures.tempo /= audioFeaturesResponse.length;
        averageTrackFeatures.time_signature /= audioFeaturesResponse.length;
        averageTrackFeatures.valence /= audioFeaturesResponse.length;

        return averageTrackFeatures;
    } catch (error) {
        console.error('Error calculating average track features:', error);
        throw error;
    }
}