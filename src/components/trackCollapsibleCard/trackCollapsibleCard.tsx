import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, IconButton, LinearProgress, LinearProgressProps, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function TrackCollapsibleCard() {

    return (
        <Card sx={{ backgroundColor: "#F30074", borderRadius: 4 }}>
            <CardContent>
                <Typography>
                    Your average stats
                </Typography>
            </CardContent>
            <CardContent>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ marginLeft: "-15%" }} >
                    <Box sx={{ backgroundColor: "#F2D300", borderRadius: 10 }} minHeight={80} minWidth={"50.5%"} />
                    <Typography>Danceability</Typography>
                </Stack>
            </CardContent>
            <CardContent>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ marginLeft: "-15%" }} >
                    <Box sx={{ backgroundColor: "#74EC42", borderRadius: 10, marginLeft: "-15%" }} minHeight={80} minWidth={"65.29%"} />
                    <Typography>Energy</Typography>
                </Stack>
            </CardContent>
            <CardContent>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ marginLeft: "-15%" }} >
                    <Box sx={{ backgroundColor: "#5CE1E7", borderRadius: 10, marginLeft: "-15%" }} minHeight={80} minWidth={"43.93%"} />
                    <Typography>Happiness</Typography>
                </Stack>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}