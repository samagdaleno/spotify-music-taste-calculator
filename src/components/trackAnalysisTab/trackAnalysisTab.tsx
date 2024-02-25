import React, { useState, useEffect } from 'react';
import TrackDetailsList from '../structure/trackDetailsList';
import Track from '../../interfaces/spotify/track';
import TrackDetails from '../../interfaces/spotify/trackDetails';
import { getAverageTrackFeatures } from '../../services/spotify.service';
import SwipeableStatCards from '../swipeableStatCards/swipeableStatCards';
import Artist from '../../interfaces/spotify/artist';


export default function TrackAnalysisTab({ trackList, artistList, timeframe }: { trackList: Track[], artistList: Artist[]; timeframe: string }) {
    const [averageStats, setAverageStats] = useState<TrackDetails | null>(null);

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

            <TrackDetailsList trackList={trackList} />
        </div>
    );
}
