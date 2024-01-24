import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Card, CardActionArea, CardContent, Chip, Collapse, Divider, LinearProgress, Stack, Typography, linearProgressClasses, styled } from '@mui/material';
import Track from '../../interfaces/spotify/track';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { getSingleTrackFeaturesById } from '../../services/spotify.service';
import TrackDetails from '../../interfaces/spotify/trackDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
interface BorderLinearProgressProps {
  customColor?: string;
}

const BorderLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== 'customColor',
})<BorderLinearProgressProps>(({ theme, customColor: color }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: color,
  },
}));


export default function TrackDetailsCard({ track, onSelect }: { track: Track; onSelect: (trackId: string) => void }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTrackDetails, setSelectedTrackDetails] = useState<TrackDetails | null>(null);
  // let trackDetails: TrackDetails;

  // useEffect to fetch track details when component is mounted
  useEffect(() => {
    if (isExpanded) {
      fetchSelectedTrackDetails(track.id);

    }
  }, [isExpanded, track.id]);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const fetchSelectedTrackDetails = async (trackId: string) => {
    if (trackId) {
      setSelectedTrackDetails(await getSingleTrackFeaturesById(trackId));
    }
  };

  return (
    <Card>
      <Box>
        <CardActionArea onClick={handleClick}>
          <CardContent sx={isExpanded ? {pb:"0"} : {pb:""} }>
            <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center' }}>
              {track.position}. {track.name} {isExpanded ? <ExpandLessIcon sx={{ color: "#10EB60" }} /> : <ExpandMoreIcon sx={{ color: "#10EB60" }} />}
            </Typography>
            {!isExpanded && (
              <Typography variant="subtitle2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                {track.artist} • {track.album}
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
          {/* Add your track features here */}
          <Stack>
            <Stack sx={{ display: 'flex', margin: "3%" }} direction="row" spacing={{ xs: 1, sm: 2 }} >
              <Typography variant="subtitle2" color="text.secondary" sx={{ width: "60%" }}>
                {track.artist} • {track.album}
                <Divider />
                Danceability:
                <BorderLinearProgress variant="determinate" value={selectedTrackDetails?.danceability || 0} customColor='#F2D300' />
                Energy:
                <BorderLinearProgress variant="determinate" value={selectedTrackDetails?.energy || 0} customColor="#74EC42" />
                Happiness: <BorderLinearProgress variant="determinate" value={selectedTrackDetails?.valence || 0} customColor="#5CE1E7" />
              </Typography>
              <img src={track.imageUrl} alt="Your Image" style={{ width: '40%', height: '40%' }} />
            </Stack>
              {/* TODO: Implement Recommendations */}
            <Stack sx={{ display: 'flex', marginLeft: "3%", mb:"3%", alignContent:"center", alignItems:"center"}} direction="row" spacing={1}> 
              <Chip sx={{backgroundColor:"#465CBF", color:"black"}} icon={<FontAwesomeIcon color='black' icon={faWandMagicSparkles} />} label="Get Recommendation" onClick={() => { window.open(track.spotifyUri, "_blank") }} />
              <Chip sx={{backgroundColor:"#0FEB60", color:"black"}} icon={<FontAwesomeIcon color='black' icon={faSpotify} />} label="Listen on Spotify" onClick={() => { window.open(track.spotifyUri, "_blank") }} />
            </Stack>
          </Stack>
        </Collapse>
      </Box>
    </Card>
  );
}
