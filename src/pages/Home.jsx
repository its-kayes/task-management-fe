import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { useState } from "react";
// import { addEventSuccess, storeEvents } from "../store/events/eventsSlice";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack, TextareaAutosize, Tooltip } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { padding } from "@mui/system";

export default function Home() {
  const dispatch = useDispatch();
  const [events, setEvents] = useState([
    { title: "Vat khete hobe :3", date: "2023-01-17" },
    { title: "Check", date: "2021-04-02" },
  ]);

  // const { value } = useSelector((state) => state.check);
  // const { events: eventsArray } = useSelector((state) => state.events);

  const handleDateClick = (arg) => {
    console.log(arg);
    toast.success(arg.dateStr);
  };

  class Event {
    constructor(events) {
      const update = events.map((event, index) => ({
        title: event.title,
        startStr: event.startStr,
        end: event._instance.range.end,
        start: event._instance.range.start,
      }));
      return { events: update };
      // console.log(update);
    }
  }

  const handleEvents = (events) => {
    // console.log({ events });
    // console.log({ title: events[0].title });
    // console.log({ startStr: events[0].startStr });
    // console.log({ end: events[0]._instance.range.end });
    // console.log({ start: events[0]._instance.range.start });

    const updateEvent = new Event(events);
    console.log(updateEvent, "updateEvent");

    // dispatch(storeEvents(events));
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <Item
              sx={
                {
                  // maxHeight: 900,
                }
              }
            >
              <FullCalendar
                height={650}
                initialView="dayGridMonth"
                plugins={[dayGridPlugin, interactionPlugin]}
                // weekends={false}
                events={events}
                dateClick={handleDateClick}
                eventsSet={handleEvents}
              />
            </Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>
              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                  position: "relative",
                  overflow: "auto",
                  maxHeight: 650,
                  "& ul": { padding: 0 },
                }}
                subheader={<li />}
              >
                {[1, 2, 3, 4, 5, 6].map((cardItem) => (
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Word of the Day
                      </Typography>
                      <Typography variant="h5" component="div">
                        check
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                      </Typography>
                      <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                ))}
              </List>
            </Item>
          </Grid>
          <Grid item xs={6} md={8}>
            <Item
              sx={{
                width: "full",
              }}
            >
              <Stack
                sx={{
                  minWidth: { lg: 420, md: 350, xs: 300 },
                }}
                border={1}
                borderRadius="1px"
                borderColor="lightgray"
              >
                <TextareaAutosize
                  minRows={8}
                  variant="standard"
                  inputProps={{
                    style: { fontSize: 13 },
                  }}
                  InputLabelProps={{
                    style: { fontSize: 13 },
                  }}
                  error="error found"
                  id="outlined-error-helper-text"
                  label="Note Area"
                  helperText="Some important text"
                />
              </Stack>
              <Stack spacing={2} direction="row">
                <Button
                  sx={{
                    width: "100%",
                    borderRadius: "0px",
                  }}
                  variant="outlined"
                >
                  Save
                </Button>
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>
              <Box sx={{ borderLeft: 1, borderRight: 1, borderTop: 1 }}>
                Note
              </Box>
              <Box
                sx={{
                  minHeight: 143,
                  width: "full",
                  overflow: "auto",
                  bgcolor: "background.paper",
                  borderLeft: 1, borderRight: 1, borderTop: 1,
                  padding: 2,
                  textAlign: "justify",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae numquam itaque error voluptas labore amet quia, qui eaque sit in!
              </Box>
              <Stack direction="row">
                <Tooltip title="Save As Task" arrow>
                  <Button
                    sx={{
                      width: "100%",
                      borderRadius: "0px",
                    }}
                    variant="outlined"
                  >
                    <AddTaskIcon />
                  </Button>
                </Tooltip>
                <Tooltip title="Save Note" arrow>
                  <Button
                    sx={{
                      width: "100%",
                      borderRadius: "0px",
                    }}
                    variant="outlined"
                  >
                    <DataSaverOnIcon />
                  </Button>
                </Tooltip>
                <Tooltip sx={{
                  color: "red"

                }} title="Clear Note" arrow>
                  <Button
                    sx={{
                      width: "100%",
                      borderRadius: "0px",
                    }}
                    variant="outlined"
                  >
                    <HighlightOffIcon />
                  </Button>
                </Tooltip>
              </Stack>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

// <div className="">
//   <section className="w-2/3 ">
//     <FullCalendar
//       initialView="dayGridMonth"
//       plugins={[dayGridPlugin, interactionPlugin]}
//       // weekends={false}
//       events={events}
//       dateClick={handleDateClick}
//       eventsSet={handleEvents}
//     />
//   </section>
// </div>
