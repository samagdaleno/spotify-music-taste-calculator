import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CustomTabContainer from './tabContainer';
// import TrackDetailsList from './trackDetailsList';
import { getLSTracksListData, getLSArtistsData } from '../../repos/spotify.repo';
import TrackAnalysisTab from '../trackAnalysisTab/trackAnalysisTab';

function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
// TODO: Create multiple branches to try different project structures
export default function HomePageTabber() { //Rename this to something more descriptive
    const [value, setValue] = React.useState(0);
    const longTermArtistList = getLSArtistsData("long_term");
    const mediumTermArtistList = getLSArtistsData("medium_term");
    const shortTermArtistList = getLSArtistsData("short_term");
    const longTermTrackList = getLSTracksListData("long_term"); //Add this to env variables  
    const mediumTermTrackList = getLSTracksListData("medium_term");
    const shortTermTrackList = getLSTracksListData("short_term");

    console.log(longTermArtistList);
    console.log(mediumTermArtistList);
    console.log(shortTermArtistList);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
            <Tab label="Years" {...a11yProps(0)} />
            <Tab label="Last 6 Months" {...a11yProps(1)} />
            <Tab label="Last 4 weeks" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabContainer value={value} index={0}>
          {/* <TitlebarImageList trackList={longTermTrackList} /> */}
          {/* <TrackDetailsList trackList={longTermTrackList} /> */}
          <TrackAnalysisTab trackList={longTermTrackList} timeframe='long_term' />
        </CustomTabContainer>
        <CustomTabContainer value={value} index={1}>
          <TrackAnalysisTab trackList={mediumTermTrackList} timeframe='medium_term'/>
        </CustomTabContainer>
        <CustomTabContainer value={value} index={2}>
          <TrackAnalysisTab trackList={shortTermTrackList} timeframe='short_term'/>
        </CustomTabContainer>
      </Box>
    );
  }