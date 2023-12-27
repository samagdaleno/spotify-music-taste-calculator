import React from 'react';
import Box from '@mui/material/Box';
import { Divider, Grid } from '@mui/material';
import Track from '../../interfaces/spotify/track';

interface TrackDetailsCardProps {
  track: Track;
}

export default function TrackDetailsCard({ track }: TrackDetailsCardProps) {
    return (
        <Box sx={{ width: "100%" }}>
          <Grid container>
            <Grid xs={8}  md={3} justifyContent="center" alignItems="center" >
                <img src={track.imageUrl} alt={track.name} height={100} width={100} />
            </Grid>
            <Grid xs={6} md={4}>
                <h3>{track.name}</h3>
                <h4>{track.artist}</h4>
                <h5>{track.album}</h5>
                <h5>{track.releaseDate}</h5>
            </Grid>
            <Grid xs={3}>
                <h1>{track.popularity}</h1>
            </Grid>
          </Grid>
          <Divider />
        </Box>
      );
}