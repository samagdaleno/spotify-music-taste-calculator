import React from "react";
import tokenService from "../services/token.service";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Home: React.FC = () => {

    const clientId = "NOPE"; // TODO: Replace with secret or environmental variable
    const redirectUri = "http://localhost:3000"; // TODO: Replace with actual redirect URI
    const scopes = 'user-read-private user-read-email'; // Specify the scopes you need
    let isLoggedIn: boolean;

    const spotifyLoginUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${encodeURIComponent(scopes)}`;
     // Ya vi porque es peligros, no tengo un servidor intermedio para manejar las llamadas a si mismo 
     // Este me regresa una navegacion

    if (window.location.hash.includes('access_token')) {
        tokenService.setAccessTokenFromUrl(window.location.toString());
    }

    if (!tokenService.getAccessToken()) {
        isLoggedIn = true;
        console.log("No token yet!");
    } else {
        isLoggedIn = false;
        console.log("You've got the token in you, boy.");
    }


    return (
        <React.Fragment>
            <Container maxWidth="sm" sx={{alignContent: 'center'}}>
                <Box sx={{ bgcolor: 'transparent', alignContent: 'center'}}>
                    <h1>Spotify Login Fucker</h1>
                    {
                        isLoggedIn ? (
                            <Button variant="contained" href={spotifyLoginUrl}> Login to Spotify, dummy </Button> 
                        ) : (
                            <Button variant="contained" href={"/"}> Let the magic, start!</Button>
                        )
                    }
                </Box>
            </Container>
        </React.Fragment>
    );
};

export default Home;