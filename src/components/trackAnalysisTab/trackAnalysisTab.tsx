import React, { useState, useEffect } from 'react';
import TrackDetailsList from '../structure/trackDetailsList';
import Track from '../../interfaces/spotify/track';
import TrackDetails from '../../interfaces/spotify/trackDetails';
import { getAverageTrackFeatures } from '../../services/spotify.service';
import SwipeableStatCards from '../trackCollapsibleCard/trackCollapsibleCard';
import Artist from '../../interfaces/spotify/artist';


export default function TrackAnalysisTab({ trackList, artistList, timeframe }: { trackList: Track[], artistList: Artist[]; timeframe: string }) {
    const [averageStats, setAverageStats] = useState<TrackDetails | null>(null);

    const handleTrackSelection = () => { // TODO: Delete this.
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // setSelectedTrackId(trackId);
    };

    useEffect(() => {
        const fetchAverageStats = async () => {
            console.log(artistList);
            const stats = getAverageTrackFeatures(timeframe);
            setAverageStats(stats);
        };

        fetchAverageStats();
    }, [timeframe]);

    return (
        <div>
            {(
                averageStats && <SwipeableStatCards trackDetails={averageStats} artistList={artistList} />
            )}
            {/* TODO: onSelect is not being used but stays as an example for the time being */}
            <TrackDetailsList trackList={trackList} onSelect={handleTrackSelection} />
        </div>
    );
}
