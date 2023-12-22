import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Home: React.FC = () => {
    return (
        <React.Fragment>
            <Container maxWidth="sm" sx={{ alignContent: 'center' }}>
                <Box sx={{ bgcolor: 'transparent', alignContent: 'center' }}>
                    <h1>Spotify Login Fucker</h1>
                    <Button variant="contained" href={"/login"}> Login to Spotify, dummy </Button>
                    <Button variant="contained" href={"/"}> Let the magic, start!</Button>
                </Box>
            </Container>
        </React.Fragment>
    );
};

export default Home;