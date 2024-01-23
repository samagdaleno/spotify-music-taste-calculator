import React, { useRef, useState } from "react";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import TrackDetails from "../../interfaces/spotify/trackDetails";
import energyImage from "../../resources/energy.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

import { Pagination } from 'swiper/modules';


export default function TrackCollapsibleCard({ trackDetails }: { trackDetails: TrackDetails }) {

    return (
        <>
            <Swiper pagination={true} modules={[Pagination]}>
                <SwiperSlide>
                    <Card sx={{ backgroundColor: "#F30074", borderRadius: 4, maxWidth: "100%" }}>
                        <CardContent style={{ textAlign: 'center' }}>
                            <Typography>
                                Your average stats
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Stack direction="row" spacing={1} alignItems="center" sx={{ marginLeft: "-15%" }} >
                                <Box sx={{ backgroundColor: "#F2D300", borderRadius: 10 }} minHeight={80} minWidth={trackDetails.danceability + "%"} />
                                <Typography>Danceability</Typography>
                            </Stack>
                        </CardContent>
                        <CardContent>
                            <Stack direction="row" spacing={1} alignItems="center" sx={{ marginLeft: "-15%" }} >
                                <Box sx={{ backgroundColor: "#74EC42", borderRadius: 10, marginLeft: "-15%" }} minHeight={80} minWidth={trackDetails.energy + "%"} />
                                <Typography>Energy</Typography>
                            </Stack>
                        </CardContent>
                        <CardContent>
                            <Stack direction="row" spacing={1} alignItems="center" sx={{ marginLeft: "-15%" }} >
                                <Box sx={{ backgroundColor: "#5CE1E7", borderRadius: 10, marginLeft: "-15%" }} minHeight={80} minWidth={trackDetails.valence + "%"} />
                                <Typography>Happiness</Typography>
                            </Stack>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            {/* <Button size="small">Learn More</Button> */}
                        </CardActions>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card sx={{ backgroundColor: "#F673C2", borderRadius: 4, maxWidth: "100%" }}>
                        <CardContent style={{ textAlign: 'center' }}>
                            <Typography>
                                Your Top Artists
                            </Typography>
                        </CardContent>

                        <CardMedia
                            sx={{ width: 200, height: 200 }}
                            image={energyImage}
                            title="green iguana"
                        />
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card sx={{ backgroundColor: "#465CBF", borderRadius: 4, maxWidth: "100%" }}>
                        <CardContent style={{ textAlign: 'center' }}>
                            <Typography>
                                Additional Stats
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </SwiperSlide>
            </Swiper>
        </>
    );
}