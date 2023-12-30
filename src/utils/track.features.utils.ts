import TrackFeatures from "../interfaces/spotify/trackFeatures";

export const calculateAverageTrackFeatures = (tracksFeatures: TrackFeatures[]): TrackFeatures => {
    try {
        const averageTrackFeatures: TrackFeatures = {
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
        };

        tracksFeatures.forEach((trackFeatures: TrackFeatures) => {
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

        averageTrackFeatures.acousticness /= tracksFeatures.length;
        averageTrackFeatures.danceability /= tracksFeatures.length;
        averageTrackFeatures.duration_ms /= tracksFeatures.length;
        averageTrackFeatures.energy /= tracksFeatures.length;
        averageTrackFeatures.instrumentalness /= tracksFeatures.length;
        averageTrackFeatures.key /= tracksFeatures.length;
        averageTrackFeatures.liveness /= tracksFeatures.length;
        averageTrackFeatures.loudness /= tracksFeatures.length;
        averageTrackFeatures.mode /= tracksFeatures.length;
        averageTrackFeatures.speechiness /= tracksFeatures.length;
        averageTrackFeatures.tempo /= tracksFeatures.length;
        averageTrackFeatures.time_signature /= tracksFeatures.length;
        averageTrackFeatures.valence /= tracksFeatures.length;

        console.log('Average track features:', averageTrackFeatures);
        return averageTrackFeatures;
    } catch (error) {
        console.error('Error calculating average track features:', error);
        throw error;
    }
}