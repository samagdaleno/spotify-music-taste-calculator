import { Stack } from "@mui/material";
import React from "react";
import Artist from "../../interfaces/spotify/artist";
import ArtistAvatar from "./artistsDetailsCard";

export default function ArtistsAvatarList({artists}:{artists: Artist[]}){
    return (
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
            {artists.map((artist, index) => (
                <ArtistAvatar key={index} artist={artist}/>
            ))}
        </Stack>
    );
}