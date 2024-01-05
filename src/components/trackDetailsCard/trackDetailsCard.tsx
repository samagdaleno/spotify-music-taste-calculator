import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Card,  CardContent, IconButton, Typography} from '@mui/material';
import Track from '../../interfaces/spotify/track';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import { StyledCardMedia } from './trackDetailsCard.styles';

export default function TrackDetailsCard({ track, onSelect }: {track : Track; onSelect: (trackId: string) => void }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = ( selectedTrack: Track ) => {
    onSelect(selectedTrack.id);
    console.info(selectedTrack);   
    setIsClicked(true); 
    setTimeout(() => {
      setIsClicked(false);
    }, 350);
  };

  return (
    <Card sx={{ display: '-webkit-box', overflow: "auto" }}>
      <StyledCardMedia
      sx={{
        '&:after': {
          opacity: isClicked ? 1 : 0,
          transform: isClicked ? 'scale(2)' : 'scale(0)'
        },
      }}
        image={track.imageUrl}
        onClick={() => handleClick(track)}/>
      <Box >
        <CardContent>
          <Typography component="div" variant="subtitle2">
            {track.position}. {track.name}
            <IconButton color="secondary" aria-label="add an alarm">
              <AutoGraphIcon />
            </IconButton>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {track.artist}
          </Typography>
          <Typography variant="caption" color="text.secondary" component="div">
            {track.album}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}