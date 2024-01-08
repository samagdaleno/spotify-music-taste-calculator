import React from 'react';
import TrackDetails from '../../interfaces/spotify/trackDetails';
import { Box, Button, Card, CardActions, CardContent, Chip, Modal, Stack, Typography } from '@mui/material';
import GaugeRingChart from './charts/gaugeRingChart';
import BoltIcon from '@mui/icons-material/Bolt';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';


interface ModalContent {
    title: string;
    description: string;
    icon?: JSX.Element;
    color?: string;
}

const bpmModalContent: ModalContent = {
    title: 'BPM (Beats Per Minute)',
    description: "Feel the heartbeat of your track! It's like a musical fitness tracker, but for your ears. Dance moves per minute anyone?", // TODO: Change this, too cringy
    icon: <BoltIcon />,
    color: 'primary',
};

const keyModalContent: ModalContent = {
    title: 'Key',
    description: "The key of a song is a group of notes that sound good together. It's the foundation of your track, and it's what gives it its unique sound.",
    icon: <MusicNoteIcon />,
    color: 'info',
};

const durationModalContent: ModalContent = {
    title: 'Duration',
    description: "How long is your track? Is it a short and sweet 2 minute banger, or a long and epic 10 minute odyssey?",
    icon: <AccessTimeIcon />,
    color: 'error',
};

const volumeModalContent: ModalContent = {
    title: 'Volume',
    description: "How loud is your track? Is it a quiet and intimate whisper, or a loud and in-your-face scream?",
    icon: <VolumeUpIcon />,
    color: 'success',
};

const timeSignatureModalContent: ModalContent = {
    title: 'Time Signature',
    description: "The time signature of a song is a set of numbers that tells you how many beats are in each bar. It's like the heartbeat of your track!",
    icon: <HourglassBottomIcon />,
    color: 'warning',
};

const signatureModalContent: ModalContent = {
    title: 'Signature',
    description: "Your track's rhythmic heartbeat! It's like a musical heartbeat monitor, ensuring that your song keeps a steady pulse. Time to synchronize your dance moves!",
    icon: <HourglassBottomIcon />,
    color: 'warning',
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    // boxShadow: 24,
    p: 4,
};

// TODO: Maybe consider using sliders ?? 
export default function TrackFeaturesPanel({ trackDetails }: { trackDetails: TrackDetails }) {
    // console.log(trackDetails);
    const [open, setOpen] = React.useState(false);
    const [modalContent, setModalContent] = React.useState<ModalContent>({
        title: 'Default Title',
        description: 'Default Description',
    });

    const handleOpen = (modalContent : ModalContent) => {
        setModalContent(modalContent);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);
    return (
        <div>
            <Card sx={{ width: '100%' }} >
                <CardContent sx={{ pt: 1, pb: 0 }}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {trackDetails.track_id ? (trackDetails.track_name + " - " + trackDetails.track_artist) : ("Your average stats:")}
                    </Typography>
                    <GaugeRingChart trackDetails={trackDetails} />
                </CardContent>  
                <CardContent sx={{ pt: 0 }}>
                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                        <Chip icon={<BoltIcon />} onClick={() => handleOpen(bpmModalContent)}
                            label={trackDetails.bpm} variant="outlined" color="primary" />
                        <Chip icon={trackDetails.signature === "Major" ? (<SentimentSatisfiedAltIcon />) : (<SentimentVeryDissatisfiedIcon />)}
                            onClick={() => handleOpen(keyModalContent)} label={trackDetails.signature} variant="outlined" color="secondary" />
                        <Chip icon={<AccessTimeIcon />} onClick={() => handleOpen(durationModalContent)}
                            label={trackDetails.duration} variant="outlined" color="error" />
                    </Stack>
                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={1} sx={{ pt: 1 }}>
                        <Chip icon={<VolumeUpIcon />} onClick={() => handleOpen(volumeModalContent)}
                            label={trackDetails.decibels} variant="outlined" color="success" />
                        <Chip icon={<HourglassBottomIcon />} onClick={() => handleOpen(timeSignatureModalContent)}
                            label={trackDetails.time_signature} variant="outlined" color="warning" />
                        {trackDetails.key ? (<Chip icon={<MusicNoteIcon />} onClick={() => handleOpen(signatureModalContent)}
                            label={trackDetails.key} variant="outlined" color="info" />) : (<div></div>)}
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
                        {modalContent.title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {modalContent.description}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}