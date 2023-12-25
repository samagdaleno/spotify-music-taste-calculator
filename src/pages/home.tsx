import React, { useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { getSavedTracks } from "../services/spotify.api.service";
import { getRefreshToken } from "../services/token.service";

const Home: React.FC = () => {
    const [accessToken, setAccessToken] = useState<string | null>(localStorage.getItem('access_token'));
    const [savedTracks, setSavedTracks] = useState<any[]>([]);
    const handleMagicButtonClick = async () => {
        const accessToken = localStorage.getItem('access_token');
        try {
            if (accessToken) {
                const tracks = await getSavedTracks(accessToken);
                setSavedTracks(tracks);
                console.log(tracks);
            }
        } catch (error) {
            // Handle error
            console.error('Error getting saved tracks:', error);
        }
    };

    return (
        <React.Fragment>
            <Container maxWidth="sm" sx={{ alignContent: 'center' }}>
                <Box sx={{ bgcolor: 'transparent', alignContent: 'center' }}>
                    <h1>Spotify Login Fucker</h1>
                    {accessToken ? 
                        <React.Fragment>
                            <Button variant="contained" onClick={getRefreshToken}>Let the magic start!</Button>
                            <Button variant="contained" onClick={handleMagicButtonClick}>Fetch Saved Tracks</Button>
                        </React.Fragment>
                        :
                        <Button variant="contained" href={"/login"}>Login to Spotify, dummy</Button>
                    }
                </Box>
            </Container>
        </React.Fragment>
    );
};

export default Home;