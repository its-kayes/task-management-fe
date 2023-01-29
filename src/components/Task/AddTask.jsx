import { Button, Divider, Stack, TextareaAutosize, TextField, Typography } from '@mui/material';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useRef } from 'react';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function AddTask() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.taskTitle.value);
        console.log(e.target.startDate.value);
    }
    const formRef = useRef(null);

    return (
        <Box>
            <Item>
                <Box ref={formRef} component="form" onSubmit={handleSubmit}>
                    <Typography mt={0.7} mb={1.3} variant="h6">Add Your Task Info</Typography>
                    <Divider />
                    <Box py={2}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={4}>
                                <Typography
                                    mt={0.7}
                                    mb={1.3}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        // width: '70%',
                                        ml: "20%"
                                    }}
                                    variant="subtitle1"
                                >Task Title</Typography>
                            </Grid>
                            <Grid item xs={6} md={8}>
                                <TextField
                                    id="outlined-basic"
                                    label="Task Title"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    name="taskTitle"
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
                                    type="date"
                                    inputProps={{
                                        style: {
                                            fontSize: 13,
                                            color: 'gray',
                                            background: 'white',
                                        },
                                    }}
                                    InputLabelProps={{
                                        style: { fontSize: 13 },
                                    }}
                                    size="small"
                                    fullWidth
                                    id="outlined-error-helper-text"
                                    defaultValue={new Date()
                                        .toISOString()
                                        .substring(0, 10)}
                                    name="startDate"
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
                                    type="date"
                                    inputProps={{
                                        style: {
                                            fontSize: 13,
                                            color: 'gray',
                                            background: 'white',
                                        },
                                    }}
                                    InputLabelProps={{
                                        style: { fontSize: 13 },
                                    }}
                                    size="small"
                                    fullWidth
                                    id="outlined-error-helper-text"
                                    defaultValue={new Date()
                                        .toISOString()
                                        .substring(0, 10)}
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
                                        minWidth: { lg: 250, md: 350, xs: 300 },
                                    }}
                                    border={1}
                                    borderRadius="2px"
                                    fontSize="18px"
                                    borderColor="black"
                                >
                                    <TextareaAutosize
                                        minRows={4}
                                        variant="standard"
                                        // placeholder='Description'
                                        aria-label="minimum height"
                                        id="outlined-error-helper-text"
                                        label="Note Area"
                                        helperText="Some important text"
                                    />
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>
                    <Divider />
                    <Button
                        fullWidth
                        startIcon={<PublishedWithChangesIcon />}
                        sx={{
                            mt: 1,
                            pt: 1,
                            fontWeight: 'bold',
                        }}
                        variant="outlined"
                        type='submit'
                    >  Create Task </Button>
                </Box>
            </Item>
        </Box>
    )
}