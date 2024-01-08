import React from 'react';
import TrackDetails from '../../interfaces/spotify/trackDetails';
import { Box, Button, Card, CardActions, CardContent, Chip, Modal, Stack, Typography } from '@mui/material';
import GaugeRingChart from './charts/gaugeRingChart';
import BoltIcon from '@mui/icons-material/Bolt';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Divider from '@mui/material/Divider';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

// TODO: Maybe consider using sliders ?? 
export default function TrackFeaturesPanel({ trackDetails }: { trackDetails: TrackDetails }) {
    // console.log(trackDetails);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Card sx={{ width: '100%' }} >
                <CardContent sx={{ pt: 1, pb: 0 }}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {trackDetails.track_id ? (trackDetails.track_name) : ("Your average stats:")}
                    </Typography>
                    <GaugeRingChart trackDetails={trackDetails} />
                </CardContent>
                <CardContent sx={{pt:0}}>
                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                        <Chip icon={ <BoltIcon />} onClick={handleOpen} label={trackDetails.bpm} variant="outlined" color="primary" />
                        <Chip icon={trackDetails.signature === "Major" ? (<SentimentSatisfiedAltIcon />):(<SentimentVeryDissatisfiedIcon />)} onClick={handleOpen} label={trackDetails.signature} variant="outlined" color="secondary" />
                        <Chip icon={<AccessTimeIcon />} onClick={handleOpen} label={trackDetails.duration} variant="outlined" color="error" />
                    </Stack>
                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}  sx={{pt:1}}>
                        <Chip icon={<VolumeUpIcon />} onClick={handleOpen} label={trackDetails.decibels} variant="outlined" color="success" />
                        <Chip icon={<MusicNoteIcon />} onClick={handleOpen} label={trackDetails.time_signature} variant="outlined" color="warning" />
                    </Stack>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            <Modal open={open} onClose={handleClose}>

                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}