import React, { useState } from "react";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { getRefreshedToken } from "../services/token.service";
import { Box, CssBaseline, Typography } from "@mui/material";
import HomePageTabber from "../components/structure/homePageTabber";

function Home(){
    const [accessToken, setAccessToken] = useState<string | null>(localStorage.getItem('access_token'));

    return (
        <div>
            <CssBaseline />
            {/* <Container maxWidth="sm" sx={{ display: 'flex',
                                           flexDirection: 'column',
                                           justifyContent: 'center',
                                           alignItems: 'center' }}> */}
                <h1>Spotify Analyzer</h1>
                {accessToken ?
                    <React.Fragment>
                        <HomePageTabber />
                        <Button variant="contained" onClick={getRefreshedToken}>Let the magic start!</Button>
                    </React.Fragment>
                    :
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'justify', alignItems: 'center',  width: '100%' }}>
                        {/* <Typography paragraph align="justify">
                            <b>YOU&apos;VE BEEN LIED TO!</b>  music genres don&apos;t exist.
                            Spotify doesn&apos;t bother with them, so why should you? Spotify
                            uses a series of characteristics in your music  to know what you REALLY like.
                            Let this analyzer show you how spotify sees your true music taste.
                        </Typography> */}
                        <Typography paragraph align="justify">
                            <b>YOU&apos;VE BEEN LIED TO,</b> Music genres? Pure fiction. <br/>
                            You&apos;ve been living in a musical fairy tale. 
                            Spotify has long ditched the genre game, so why play along? 
                            Behind the scenes, Spotify delves into the DNA of your tunes, unraveling 
                            the real symphony of your taste. This analyzer&apos;s your backstage pass 
                            to witness how Spotify decodes the rhythm of your soul. Ready for the 
                            unfiltered truth? 
                        </Typography>
                        <Button variant="contained" href={"/login"}>Show me the truth</Button>
                    </Box>
                }
            {/* </Container> */}
        </div>
    );
}

export default Home;