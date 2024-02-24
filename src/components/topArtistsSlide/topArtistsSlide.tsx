import React from "react";
import Artist from "../../interfaces/spotify/artist";
import { Grid, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableRow, styled, tableCellClasses } from "@mui/material";

const StyledTableCell = styled(TableCell)(() => ({
    border: 0,
    [`&.${tableCellClasses.body}`]: {
        fontSize: 20,
    },
}));

const StyledNameCell = styled(TableCell)(() => ({
    border: 0,
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        fontWeight: "bold",
    },
}));

const StyledTableRow = styled(TableRow)(() => ({
    borderRadius:0,
    border: 0,
}));

export default function TopArtistsSlide({ artistList }: { artistList: Artist[] }) {
    return (
        <Grid container spacing={1}>
            <Grid item xs={8} md={8}>
                <Stack>
                    <img src={artistList[0].imageUrl} style={{ marginBottom: '3%' }} />
                    {/* {artistList.map((artist) => (
                        <Typography variant="h6" key={artist.id}> {artist.position} - {artist.name} </Typography>
                    ))} */}

                    <Paper sx={{ width: '100%', overflow: 'hidden', backgroundColor: 'transparent', borderRadius:0 }}>
                        {/* {artistList.map((artist) => (
                            <Box key={artist.id}
                                sx={{
                                    backgroundColor: '#F2D300',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    minHeight: 80,
                                    minWidth: 100, // Set a minimum width for each box
                                    margin: 4, // Add some margin between boxes
                                }}>
                                <Typography variant="h6">{artist.position}</Typography>
                                <Typography variant="h5">{artist.name}</Typography>
                            </Box>
                        ))} */}

                        <TableContainer sx={{ maxHeight: '50vw' }}>
                            <Table size="small">
                                <TableBody>
                                    {artistList.map((artist, index) => (
                                        <StyledTableRow key={artist.id} sx={{
                                            backgroundColor: index % 5 === 0 ? '#F673C2' : index % 5 === 1 ? '#15D761' : index % 5 === 2 ? '#FF8B1C' : index % 5 === 3 ? '#F1FF46' : '#121212',
                                        }}>
                                            <StyledTableCell align="center" sx={{color: index % 5 === 4 ? '#F1FF46' : 'black'}}> {artist.position} </StyledTableCell>
                                            <StyledNameCell align="left" sx={{color: index % 5 === 4 ? '#F1FF46' : 'black'}}> {artist.name} </StyledNameCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>

                </Stack>
            </Grid>
            <Grid item xs={4} md={4}>
                <Stack>
                    {artistList.slice(1, 5).map((artist) => (
                        <img style={{ marginBottom: '3%' }} key={artist.id} src={artist.imageUrl} />
                    ))}
                </Stack>
            </Grid>
        </Grid>
    )
}