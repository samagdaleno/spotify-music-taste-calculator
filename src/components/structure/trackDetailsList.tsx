import React from 'react';
import Track from '../../interfaces/spotify/track';
import {  Stack } from '@mui/material';
import TrackDetailsCard from '../trackDetailsCard/trackDetailsCard';

export default function TrackDetailsList({ trackList }: { trackList: Track[] }) {
    return (
        <Stack sx={{ width: "100%"}} spacing={1} >
            {trackList.map((track: Track) => {
                return (
                    <TrackDetailsCard key={track.id} track={track} />
                );
            })}
        </Stack>
    );
}