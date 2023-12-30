import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CustomTabContainer from './tabContainer';
import TrackDetailsList from './trackDetailsList';
import { getLSTracksListData } from '../../repos/spotify.repo';

function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function HomePageTabber() { //Rename this to something more descriptive
    const [value, setValue] = React.useState(0);
    const longTermTrackList = getLSTracksListData("long_term"); //Add this to env variables  
    const mediumTermTrackList = getLSTracksListData("medium_term");
    const shortTermTrackList = getLSTracksListData("short_term");
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
            <Tab label="Several Years" {...a11yProps(0)} />
            <Tab label="Last 6 Months" {...a11yProps(1)} />
            <Tab label="Last 4 weeks" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabContainer value={value} index={0}>
          <TrackDetailsList trackList={longTermTrackList} />
        </CustomTabContainer>
        <CustomTabContainer value={value} index={1}>
          <TrackDetailsList trackList={mediumTermTrackList} />
        </CustomTabContainer>
        <CustomTabContainer value={value} index={2}>
          <TrackDetailsList trackList={shortTermTrackList} />
        </CustomTabContainer>
      </Box>
    );
  }