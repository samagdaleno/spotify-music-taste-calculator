import React, { useState } from "react";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// import { getSavedTracks, getTopTracks } from "../services/spotify.api.service";
import { getRefreshToken } from "../services/token.service";
import { CssBaseline } from "@mui/material";
import HomePageTabber from "../components/structure/homePageTabber";

function Home(){
    const [accessToken, setAccessToken] = useState<string | null>(localStorage.getItem('access_token'));
    // const [savedTracks, setSavedTracks] = useState<any[]>([]);
    // const handleMagicButtonClick = async () => {
    //     const accessToken = localStorage.getItem('access_token');
    //     try {
    //         if (accessToken) {
    //             const tracks = await getTopTracks(accessToken);
    //             setSavedTracks(tracks);
    //             console.log(tracks);
    //         }
    //     } catch (error) {
    //         console.error('Error getting saved tracks:', error);
    //     }
    // };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" sx={{ display: 'flex',
                                           flexDirection: 'column',
                                           justifyContent: 'center',
                                           alignItems: 'center' }}>
                <h1>Spotify Login</h1>
                {accessToken ?
                    <React.Fragment>
                        <HomePageTabber /> 
                        <Button variant="contained" onClick={getRefreshToken}>Let the magic start!</Button>
                    </React.Fragment>
                    :
                    <Button variant="contained" href={"/login"}>Login to Spotify, dummy</Button>
                }
            </Container>
        </React.Fragment>
    );
}

export default Home;