import React, { useState } from "react";
import { Avatar, Box, Chip, Stack, ToggleButtonGroup, styled } from "@mui/material";
import UserData from "../../interfaces/user.data";
import { getLSArtistsData, getLSTracksListData, getLSUserData } from "../../repos/spotify.repo";
import './landingPageLayout.css';
import TrackAnalysisTab from "../trackAnalysisTab/trackAnalysisTab";
import Track from "../../interfaces/spotify/track";

// TODO: CHECK THIS STYLE
const StyledChip = styled(Chip) <{ isselected: boolean }>` 
    background-color: ${(props) => (props.isselected ? '#10eb60' : '#2A2A2A')};
    color: ${(props) => (props.isselected ? '#002A07' : 'inherit')};
`;

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
        console.info(`You clicked the Chip at index ${index}.`);
        setSelectedChip(index);
        setSelectedTimeframe(timeframe);
        setSelectedTrackList(getLSTracksListData(timeframe));
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Stack direction="row" spacing={2} alignItems="center" sx={{pb:1}} >
                <Avatar alt="Remy Sharp" src={userData.imageUrl} />
                <ToggleButtonGroup size="large" aria-label="Large sizes">
                    <Stack direction="row" spacing={1}>
                        <StyledChip
                            isselected={selectedChip === 0}
                            className="chip-toggle-button"
                            label="4 Weeks"
                            onClick={() => handleClick(0, "short_term")}
                        />
                        <StyledChip
                            isselected={selectedChip === 1}
                            className="chip-toggle-button"
                            label="6 Months"
                            onClick={() => handleClick(1, "medium_term")}/>
                        <StyledChip 
                            isselected={selectedChip === 2}
                            className="chip-toggle-button"
                            label="All time"
                            onClick={() => handleClick(2, "long_term")}/>
                        {/* <StyledChip
                            isselected={selectedChip === 0}
                            className="chip-toggle-button"
                            label="All time"
                            onClick={() => handleClick(0, "long_term")}
                        />
                        <StyledChip
                            isselected={selectedChip === 1}
                            className="chip-toggle-button"
                            label="6 Months"
                            onClick={() => handleClick(1, "medium_term")}
                        />
                        <StyledChip
                            isselected={selectedChip === 2}
                            className="chip-toggle-button"
                            label="4 Weeks"
                            onClick={() => handleClick(2, "short_term")}
                        /> */}
                    </Stack>
                </ToggleButtonGroup>
            </Stack>

            <TrackAnalysisTab trackList={selectedTrackList} timeframe={selectedTimeframe} />
        </Box>
    );
}
