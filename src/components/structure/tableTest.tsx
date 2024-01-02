import * as React from 'react';
import { DataGrid, GridColumnMenu, GridColumnMenuProps, GridRowParams, GridRowSelectionModel } from '@mui/x-data-grid';
import { getAverageTrackFeatures, getLSTracksListData } from '../../repos/spotify.repo';
import { BarChart } from '@mui/x-charts/BarChart';
import { getSingleTrackFeaturesById } from '../../services/spotify.service';
import { Stack } from '@mui/material';
import TitlebarImageList from '../showcase/musicImageList';
import ButtonBaseDemo from '../imageButton';

const columns = [
  { field: 'id', headerName: 'ID', width: 130 },
  { field: 'position', headerName: 'Position', width: 80, description: 'This is the popularity of the track.', },
  // { field: 'imageUrl', headerName: 'Image', width: 130},
  { field: 'name', headerName: 'Name', width: 350 },
  { field: 'artist', headerName: 'Artist', width: 130 },
  { field: 'album', headerName: 'Album', width: 130, },
  { field: 'releaseDate', headerName: 'Release Date', width: 100 },
  { field: 'popularity', headerName: 'Popularity', width: 80, description: 'This column has a value getter and is not sortable.', },
];

function CustomColumnMenu(props: GridColumnMenuProps) {
  return (
    <GridColumnMenu
      {...props}
      slots={{
        // Hide `columnMenuColumnsItem`
        columnMenuColumnsItem: null,
      }}
    />
  );
}

let selectedTrackDetails = {}; 

const handleRowClick = async (selectedRow: GridRowParams) => {  
  selectedTrackDetails = await getSingleTrackFeaturesById(selectedRow.id.toString());
  console.log(selectedRow.row.name);
  console.log(selectedTrackDetails);
};

export default function DataTable() { // TODO: Maybe pass in the time range as a prop
  const rows = getLSTracksListData("short_term");
  const averageStats = getAverageTrackFeatures("short_term") // TODO: Maybe move this
  const trackList = getLSTracksListData("short_term");
  const [rowSelectionModel, setRowSelectionModel] = React.useState<GridRowSelectionModel>([]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <Stack direction="row" >
        {/* <BarChart
          xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
          series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
          width={500}
          height={450}
        /> */}
        {/* <TitlebarImageList trackList={trackList} /> */}
        <ButtonBaseDemo trackList={trackList} />
      </Stack>
      
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
        pageSizeOptions={[5, 10, 20]}
        columnVisibilityModel={{ id: false, popularity:false }}
        slots={{ columnMenu: CustomColumnMenu }}
        onRowClick={handleRowClick}
        autoHeight
      />
    </div>
  );
}