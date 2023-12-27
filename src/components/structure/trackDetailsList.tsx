import React from 'react';
import Track from '../../interfaces/spotify/track';
import { Box } from '@mui/material';
import TrackDetailsCard from './trackDetailsCard';

export default function TrackDetailsList({ trackList }: { trackList: Track[] }) {
    return (
        <Box sx={{ width: "100%" }}>
            {trackList.map((track: Track) => {
                return (
                    <TrackDetailsCard key={track.id} track={track} />
                );
            })}
        </Box>
    );
}