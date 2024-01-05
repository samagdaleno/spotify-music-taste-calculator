import React from 'react';
import Track from '../../interfaces/spotify/track';
import {  Stack } from '@mui/material';
import TrackDetailsCard from '../trackDetailsCard/trackDetailsCard';

export default function TrackDetailsList({ trackList, onSelect }: { trackList: Track[]; onSelect: (trackId: string) => void }) {
    return (
        <Stack sx={{ width: "100%"}} spacing={1} >
            {trackList.map((track: Track) => (
                <TrackDetailsCard key={track.id} track={track} onSelect={onSelect} />
            ))}
        </Stack>
    );
}