import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TrackDetails from '../../interfaces/spotify/trackDetails';
import BoltIcon from '@mui/icons-material/Bolt';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import AudiotrackSharpIcon from '@mui/icons-material/AudiotrackSharp';
import RatingCard from './statRating';
import { Chip, Collapse, Divider, Stack } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';



export default function StatAnalysisCard({ trackDetails, timeframe }: { trackDetails: TrackDetails, timeframe: string }) {
    // TODO: Refactor timeframe to be an enum
    const [extraStatsExpanded, setExtraStatsExpanded] = React.useState(true);

    return (
        <Box sx={{ minWidth: 275 }}>
            <Card >
                <CardContent sx={{ pb: 0 }}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {trackDetails.track_id ? (trackDetails.track_name + " - " + trackDetails.track_artist) : ("Your " + timeframe +" average stats:")}
                    </Typography>
                </CardContent>

                <RatingCard
                    title="Danceability"
                    value={trackDetails.danceability}
                    description="Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity."
                    icon={<AudiotrackSharpIcon fontSize="inherit" />}
                    color="#0feb60"
                    open={true}
                />
                
                <RatingCard
                    title="Energy"
                    value={trackDetails.energy}
                    description="Energy represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy."
                    icon={<BoltIcon fontSize="inherit" />}
                    color="#abf8ff"
                />
                
                <RatingCard
                    title="Happiness"
                    value={trackDetails.valence}
                    description="Describes the musical positiveness conveyed by a track. Tracks with high happiness sound more positive (e.g. happy, cheerful, euphoric), while tracks with low happiness sound more negative (e.g. sad, depressed, angry)."
                    icon={(trackDetails.valence > 50 ? <SentimentVerySatisfiedIcon fontSize="inherit" /> : <SentimentVeryDissatisfiedIcon fontSize="inherit" /> )}
                    color="#ff3d47"
                />
                <Divider />

                <Collapse in={extraStatsExpanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                            <Chip icon={<BoltIcon />}
                                label={trackDetails.bpm} variant="outlined" color="primary" />
                            <Chip icon={trackDetails.signature === "Major" ? (<SentimentSatisfiedAltIcon />) : (<SentimentVeryDissatisfiedIcon />)}
                                label={trackDetails.signature} variant="outlined" color="secondary" />
                            <Chip icon={<AccessTimeIcon />}
                                label={trackDetails.duration} variant="outlined" color="error" />
                        </Stack>
                        <Stack direction="row" justifyContent="center" alignItems="center" spacing={1} sx={{ pt: 1 }}>
                            <Chip icon={<VolumeUpIcon />}
                                label={trackDetails.decibels} variant="outlined" color="success" />
                            <Chip icon={<HourglassBottomIcon />}
                                label={trackDetails.time_signature} variant="outlined" color="warning" />
                            {trackDetails.key ? (<Chip icon={<MusicNoteIcon />}
                                label={trackDetails.key} variant="outlined" color="info" />) : (<div></div>)}
                        </Stack>
                    </CardContent>
                </Collapse>
            </Card>
        </Box>
    );
}
