import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

export default function CollapsibleArtistListItem() {
    const [open, setOpen] = React.useState(false);
 
    const handleClick = () => {
        setOpen(!open);
    };
    
    return (
        <React.Fragment>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary="Inbox" />
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItemButton>
                </List>
            </Collapse>
        </React.Fragment>
    );
}