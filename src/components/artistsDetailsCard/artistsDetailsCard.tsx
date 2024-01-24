import { Avatar, Badge, Stack } from "@mui/material";
import React from "react";
import Artist from "../../interfaces/spotify/artist";

export default function ArtistAvatar({ artist }: { artist: Artist }) {
    return (
        <Stack alignItems={"center"}>
            {/* <Badge overlap="circular" color="error" anchorOrigin={{ vertical: 'top', horizontal: 'right' }} badgeContent={artist.position}> */}
                <Avatar src={artist.imageUrl} />
            {/* </Badge> */}
            {/* {artist.name} */}
        </Stack>
    );
}