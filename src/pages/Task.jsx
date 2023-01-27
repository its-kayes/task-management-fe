import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Divider, Stack, TextareaAutosize, TextField, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



export default function Task() {
    return (
        <Box>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {/* <Grid item xs={6} md={8}>
                        <Item>xs=6 md=8</Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item>xs=6 md=4</Item>
                    </Grid> */}
                    <Grid item xs={6} md={4}>
                        <Item>
                            <Box>
                                <Typography mt={0.7} mb={1.3} variant="h6">Add Your Task Info</Typography>
                                <Divider />
                                <Box>
                                    <Grid container my={0.5} spacing={2}>
                                        <Grid item xs={6} md={4}>
                                            <Typography mt={0.7} mb={1.3} sx={{
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',
                                                // width: '70%',
                                                ml: "20%"
                                            }} variant="subtitle1">Title</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={8}>
                                            <TextField
                                                id="outlined-basic"
                                                label="Task Title"
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                            />
                                        </Grid>

                                    </Grid>
                                    <Grid container my={0.5} spacing={2}>
                                        <Grid item xs={6} md={4}>
                                            <Typography mt={0.7} mb={1.3} sx={{
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',
                                                // width: '70%',
                                                ml: "20%"
                                            }} variant="subtitle1">Start Date</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={8}>
                                            <TextField
                                                id="outlined-basic"
                                                label="Start Date"
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                            />

                                        </Grid>
                                    </Grid>

                                    <Grid container my={0.5} spacing={2}>
                                        <Grid item xs={6} md={4}>
                                            <Typography mt={0.7} mb={1.3} sx={{
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',
                                                // width: '70%',
                                                ml: "20%"
                                            }} variant="subtitle1">End Date</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={8}>
                                            <TextField
                                                id="outlined-basic"
                                                label="End Date"
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid container my={0.5} spacing={2}>
                                        <Grid item xs={6} md={4}>
                                            <Typography mt={0.7} mb={1.3} sx={{
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',
                                                // width: '70%',
                                                ml: "20%"
                                            }} variant="subtitle1">Description</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={8}>
                                            <Stack
                                                sx={{
                                                    minWidth: { lg: 300, md: 350, xs: 300 },
                                                }}
                                                border={1}
                                                borderRadius="2px"
                                                fontSize="18px"
                                                borderColor="black"
                                            >
                                                <TextareaAutosize
                                                    minRows={8}
                                                    variant="standard"
                                                    placeholder='Description'
                                                    aria-label="minimum height"
                                                    id="outlined-error-helper-text"
                                                    label="Note Area"
                                                    helperText="Some important text"
                                                />
                                            </Stack>
                                        </Grid>
                                    </Grid>


                                </Box>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <Item>xs=6 md=8</Item>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}