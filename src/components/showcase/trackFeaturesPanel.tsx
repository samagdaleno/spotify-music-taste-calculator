import React from 'react';
import TrackDetails from '../../interfaces/spotify/trackDetails';
import { Box, Stack, Typography } from '@mui/material';
// import { BarChart } from '@mui/x-charts/BarChart';
// import * as echarts from 'echarts';
import NightingaleChart from './charts/nightingaleChart';

// type EChartsOption = echarts.EChartsOption;

export default function TrackFeaturesPanel({ trackDetails } : { trackDetails: TrackDetails }) {
    return (
        <Box sx={{ width: "100%" }}>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} >
                {/* <BarChart
                    xAxis={[{ scaleType: 'band', data: ['Your taste'] }]}
                    series={[{ label:"Dance", data: [trackDetails.danceability] }, {label:"Energy", data: [trackDetails.energy] }, { label:"Valence",data: [trackDetails.valence] }]}
                    height={450}
                /> */}
                <NightingaleChart trackDetails={trackDetails}/>
                <Stack  spacing={{ xs: 1, sm: 2, md: 4 }} >
                    <Typography variant="h6" component="div"> Signature: {trackDetails.signature} </Typography>
                    <Typography variant="h6" component="div"> Beats Per Minute(BPM): {trackDetails.bpm} </Typography>
                    <Typography variant="h6" component="div"> key: {trackDetails.key} </Typography>
                    <Typography variant="h6" component="div"> time_signature: {trackDetails.time_signature} </Typography>
                    <Typography variant="h6" component="div"> duration: {trackDetails.duration} </Typography>
                    <Typography variant="h6" component="div"> decibels: {trackDetails.decibels} </Typography>
                </Stack>
                {/* <TitlebarImageList trackList={trackList} /> */}
                {/* <ButtonBaseDemo trackList={trackList} /> */}
            </Stack>
        </Box>
    );
}