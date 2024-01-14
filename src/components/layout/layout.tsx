import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DrawerElements from '../navigation/drawerElements';
import LayoutProps from '../../interfaces/props/layoutProps';
const drawerWidth = 240;

export default function Layout({ children }: LayoutProps) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigationItems: [string, string][] = [['Home', '/'], ['About', '/about']];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }; 

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders" >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    <DrawerElements navigationItems={navigationItems} />
                </Drawer>

                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    
                    <DrawerElements navigationItems={navigationItems} />
                </Drawer>
            </Box>

            <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }} >
                <Toolbar sx={{ mr: 2, display: { sm: 'none' } }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Spotify Analyzer
                    </Typography>
                </Toolbar>
                <div className="content-container">{children}</div>
            </Box>
        </Box>
    );
}