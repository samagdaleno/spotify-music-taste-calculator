import React from "react";
import { Box, Button, Card, CardActions, CardContent, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import TrackDetails from "../../interfaces/spotify/trackDetails";
// import energyImage from "../../resources/energy.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

import { Pagination } from 'swiper/modules';
import Artist from "../../interfaces/spotify/artist";
import TopArtistsSlide from "../topArtistsSlide/topArtistsSlide";

export default function SwipeableStatCards({ trackDetails, artistList }: { trackDetails: TrackDetails; artistList: Artist[] }) { //TODO: RENAME THIS!!! 

    return (
        <>
            <Swiper pagination={true} modules={[Pagination]}>
                <SwiperSlide>
                    <Card sx={{ backgroundColor: "#F30074", borderRadius: 4, height: "100%" }}>
                        <CardContent style={{ textAlign: 'center' }}>
                            <Typography>
                                Your songs&apos; mood:
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Stack direction="row" spacing={1} alignItems="center" sx={{ marginLeft: "-15%" }} >
                                <Box sx={{ backgroundColor: "#F2D300", borderRadius: 10 }} minHeight={80} minWidth={trackDetails.danceability + "%"} />
                                <Typography>Danceability <br /> {trackDetails.danceability}% </Typography>
                            </Stack>
                        </CardContent>
                        <CardContent>
                            <Stack direction="row" spacing={1} alignItems="center" sx={{ marginLeft: "-15%" }} >
                                <Box sx={{ backgroundColor: "#74EC42", borderRadius: 10, marginLeft: "-15%" }} minHeight={80} minWidth={trackDetails.energy + "%"} />
                                <Typography>Energy <br /> {trackDetails.energy}% </Typography>
                            </Stack>
                        </CardContent>
                        <CardContent>
                            <Stack direction="row" spacing={1} alignItems="center" sx={{ marginLeft: "-15%" }} >
                                <Box sx={{ backgroundColor: "#5CE1E7", borderRadius: 10, marginLeft: "-15%" }} minHeight={80} minWidth={trackDetails.valence + "%"} />
                                <Typography>Happiness <br /> {trackDetails.valence}% </Typography>
                            </Stack>
                        </CardContent>
                        <CardActions>
                            <Button size="small" sx={{ color: "white" }}>Share</Button>
                        </CardActions>
                    </Card>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <Card sx={{ backgroundColor: "#F673C2", borderRadius: 4, maxWidth: "100%", height: "100%" }}>
                        <CardContent style={{ textAlign: 'center' }}>
                            <Typography>
                                Your Top Artists
                            </Typography>
                            <CardMedia sx={{ width: 150, height: 150 }} image={energyImage} />

                            <CardMedia sx={{ width: 150, height: 150 }} image={energyImage} />

                            <CardMedia sx={{ width: 150, height: 150 }} image={energyImage} />
                        </CardContent>

                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </SwiperSlide> */}
                <SwiperSlide>
                    <Card sx={{ backgroundColor: "#6A00BA", borderRadius: 4, height: "100%", maxWidth: "100%" }}>
                        <CardContent style={{ textAlign: 'center' }}>
                            <Typography>
                                Your Top Artists
                            </Typography>
                            <br/>

                            <TopArtistsSlide artistList={artistList} />
                            {/* <Box sx={{ height: '100vw', overflowY: 'scroll' }}>
                                <br/>
                                    {artistList.map((artist) => (
                                        <Typography  variant="h6" key={artist.id}> {artist.position} - {artist.name} </Typography>
                                    ))}
                            </Box> */}
                        </CardContent>
                    </Card>
                </SwiperSlide>
            </Swiper>
        </>
    );
}