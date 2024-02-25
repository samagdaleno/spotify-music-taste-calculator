import React from 'react';
import Track from '../../interfaces/spotify/track';
import { Stack, Typography } from '@mui/material';
import TrackDetailsCard from '../trackDetailsCard/trackDetailsCard';

// TODO: Maybe extract this parameter into a props interface. 
export default function TrackDetailsList({ trackList, }: { trackList: Track[]; }) {
    return (
        <Stack sx={{ pt: 2, width: "100%" }} spacing={1} >

            <Typography>Your top tracks</Typography>
            {trackList.map((track: Track) => (
                <TrackDetailsCard key={track.id} track={track} />
            ))}
        </Stack>
    );
}