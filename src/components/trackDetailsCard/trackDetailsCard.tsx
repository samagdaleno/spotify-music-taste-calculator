import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Card, CardActionArea, CardContent, Hidden, Typography } from '@mui/material';
import Track from '../../interfaces/spotify/track';
// import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import { StyledCardMedia } from './trackDetailsCard.styles';

export default function TrackDetailsCard({ track, onSelect }: { track: Track; onSelect: (trackId: string) => void }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (selectedTrack: Track) => {
    onSelect(selectedTrack.id);
    console.info(selectedTrack);
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 350);
  };

  return (
    <Card>
      {/* <StyledCardMedia
        sx={{
          height: 80,
          width: 80,
          '&:after': {
            opacity: isClicked ? 1 : 0,
            transform: isClicked ? 'scale(2)' : 'scale(0)',
          },
        }}
        image={track.imageUrl}
        onClick={() => handleClick(track)}
      /> */}
      <Box>
        <CardActionArea onClick={() => handleClick(track)}>
          <CardContent>
            <Typography
              variant="subtitle2"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {track.position}. {track.name}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" textOverflow={'ellipsis'} overflow={'hidden'}>
              {track.artist} • {track.album}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Box>
    </Card>
  );
}
