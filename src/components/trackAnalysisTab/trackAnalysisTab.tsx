import React, { useState, useEffect } from 'react';
import TrackDetailsList from '../structure/trackDetailsList';
import Track from '../../interfaces/spotify/track';
import TrackDetails from '../../interfaces/spotify/trackDetails';
import TrackFeaturesPanel from '../showcase/trackFeaturesPanel';
import { getAverageTrackFeatures, getSingleTrackFeaturesById } from '../../services/spotify.service';

export default function TrackAnalysisTab({ trackList }: { trackList: Track[] }) {
    const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);
    const [selectedTrackDetails, setSelectedTrackDetails] = useState<TrackDetails | null>(null);
    const [averageStats, setAverageStats] = useState<TrackDetails | null>(null);

    const handleTrackSelection = (trackId: string) => {
        setSelectedTrackId(trackId);
    };

    useEffect(() => {
        const fetchAverageStats = async () => {
            const stats = await getAverageTrackFeatures("short_term");
            setAverageStats(stats);
        };

        fetchAverageStats();
    }, []);

    useEffect(() => {
        const fetchSelectedTrackDetails = async () => {
            if (selectedTrackId) {
                const details = await getSingleTrackFeaturesById(selectedTrackId);
                setSelectedTrackDetails(details);
            }
        };

        fetchSelectedTrackDetails();
    }, [selectedTrackId]);

    return (
        <div>
            {/* {selectedTrackDetails ? (
                <TrackFeaturesPanel trackDetails={selectedTrackDetails} />
            ) : (
                averageStats && <TrackFeaturesPanel trackDetails={averageStats} />
            )} */}

            <TrackDetailsList trackList={trackList} onSelect={handleTrackSelection} />
        </div>
    );
}
