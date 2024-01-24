import React, { useState } from "react";
import { Avatar, Box, Chip, Stack, ToggleButtonGroup } from "@mui/material";
import UserData from "../../interfaces/user.data";
import { getLSArtistsData, getLSTracksListData, getLSUserData } from "../../repos/spotify.repo";
import './landingPageLayout.css';
import TrackAnalysisTab from "../trackAnalysisTab/trackAnalysisTab";
import Track from "../../interfaces/spotify/track";

export default function LandingPageLayout() {

    const [selectedChip, setSelectedChip] = useState<number | null>(0);
    const [selectedTimeframe, setSelectedTimeframe] = useState<string>("short_term");
    const [selectedTrackList, setSelectedTrackList] = useState<Track[]>(getLSTracksListData("short_term"));
    const userData: UserData = getLSUserData();
    // console.log(selectedTrackList);

    const longTermArtistList = getLSArtistsData("long_term");
    const mediumTermArtistList = getLSArtistsData("medium_term");
    const shortTermArtistList = getLSArtistsData("short_term");

    console.log(longTermArtistList);
    console.log(mediumTermArtistList);
    console.log(shortTermArtistList);

    const handleClick = (index: number, timeframe: string) => {
        setSelectedChip(index);
        setSelectedTimeframe(timeframe);
        setSelectedTrackList(getLSTracksListData(timeframe));
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ pb: 1 }} >
                <Avatar alt="Remy Sharp" src={userData.imageUrl} />
                <ToggleButtonGroup size="large" aria-label="Large sizes">
                    <Stack direction="row" spacing={1}>
                        <Chip
                            className="chip-toggle-button"
                            label="4 Weeks"
                            onClick={() => handleClick(0, "short_term")}
                            sx={{
                                color: selectedChip === 0 ? '#002A07' : 'inherit',
                                backgroundColor: selectedChip === 0 ? '#10eb60' : '2A2A2A',
                            }} />
                        <Chip
                            className="chip-toggle-button"
                            label="6 Months"
                            onClick={() => handleClick(1, "medium_term")} 
                            sx={{
                                color: selectedChip === 1 ? '#002A07' : 'inherit',
                                backgroundColor: selectedChip === 1 ? '#10eb60' : '2A2A2A',
                            }}
                        />
                        <Chip
                            className="chip-toggle-button"
                            label="All time"
                            onClick={() => handleClick(2, "long_term")} 
                            sx={{
                                color: selectedChip === 2 ? '#002A07' : 'inherit',
                                backgroundColor: selectedChip === 2 ? '#10eb60' : '2A2A2A',
                            }}/>
                    </Stack>
                </ToggleButtonGroup>
            </Stack>
            {/* <ArtistsAvatarList artists={longTermArtistList}/> */}

            <TrackAnalysisTab trackList={selectedTrackList} timeframe={selectedTimeframe} />
        </Box>
    );
}
