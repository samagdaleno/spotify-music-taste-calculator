import React, { useState, useEffect } from 'react';
import TrackDetailsList from '../structure/trackDetailsList';
import Track from '../../interfaces/spotify/track';
import TrackDetails from '../../interfaces/spotify/trackDetails';
// import TrackFeaturesPanel from '../showcase/trackFeaturesPanel';
import { getAverageTrackFeatures, getSingleTrackFeaturesById } from '../../services/spotify.service';
import { Divider } from '@mui/material';
import StatAnalysisCard from '../trackAnalysisCard/analysisCard';
// import { time } from 'console';


export default function TrackAnalysisTab({ trackList, timeframe }: { trackList: Track[], timeframe: string }) {
    const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);
    const [selectedTrackDetails, setSelectedTrackDetails] = useState<TrackDetails | null>(null);
    const [averageStats, setAverageStats] = useState<TrackDetails | null>(null);

    const handleTrackSelection = (trackId: string) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setSelectedTrackId(trackId);
    };

    useEffect(() => {
        const fetchAverageStats = async () => {
            setSelectedTrackDetails(null);
            const stats = await getAverageTrackFeatures(timeframe);
            setAverageStats(stats);
        };

        fetchAverageStats();
    }, [timeframe]);

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
            {selectedTrackDetails ? (
                <StatAnalysisCard trackDetails={selectedTrackDetails} timeframe={timeframe} />
            ) : (
                averageStats && 
                <StatAnalysisCard trackDetails={averageStats} timeframe={timeframe}  />
            )}
            <Divider />

            <TrackDetailsList trackList={trackList} onSelect={handleTrackSelection} />
        </div>
    );
}
