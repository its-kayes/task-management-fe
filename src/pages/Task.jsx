import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TaskTimeLine from '../components/Task/TaskTimeLine';
import Test from './Test';
import PreviousListTask from '../components/Task/PreviousListTask';
import AddTask from '../components/Task/AddTask';

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
                    <Grid item xs={6} md={3}>
                        <AddTask />
                    </Grid>
                    <Grid item xs={6} md={9}>
                        <Item>
                            <Grid container spacing={2}>
                                <Grid item xs={6} md={8}>
                                    <Item>
                                        <TaskTimeLine />
                                    </Item>
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <Item>
                                        <PreviousListTask />
                                    </Item>
                                </Grid>
                            </Grid>
                        </Item>
                        <Item>
                            <Grid container spacing={2}>
                                <Grid item xs={6} md={8}>
                                    <Item>
                                        <TaskTimeLine />
                                    </Item>
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <Item>
                                        <PreviousListTask />
                                        {/* <Test /> */}
                                    </Item>
                                </Grid>
                            </Grid>
                        </Item>
                    </Grid>

                </Grid>
            </Box>

        </Box >
    )
}