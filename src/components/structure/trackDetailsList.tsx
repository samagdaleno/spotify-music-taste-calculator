import React from 'react';
import Track from '../../interfaces/spotify/track';
import {  Stack } from '@mui/material';
import TrackDetailsCard from '../trackDetailsCard/trackDetailsCard';
import Artist from '../../interfaces/spotify/artist';

// TODO: Maybe extract this parameter into a props interface. 
export default function TrackDetailsList({ trackList, onSelect }: { trackList: Track[]; onSelect: (trackId: string) => void }) {
    return (
        <Stack sx={{pt: 2,  width: "100%"}} spacing={1} >
            {trackList.map((track: Track) => (
                <TrackDetailsCard key={track.id} track={track} onSelect={onSelect} />
            ))}
        </Stack>
    );
}