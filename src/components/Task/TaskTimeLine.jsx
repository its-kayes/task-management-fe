import { Box, Button, Divider, Stack, Tabs, Tooltip, Typography } from "@mui/material";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import LensIcon from '@mui/icons-material/Lens';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { useState } from "react";

export default function TaskTimeLine() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box>
            <Box
                value={value}
                onChange={handleChange}
                // variant="scrollable"
                scrollButtons={false}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    paddingBottom: 1,
                    width: "100%",
                    maxWidth: "800px",
                    overflowX: "scroll",
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                }}
            // className="overflow-x-scroll"
            >
                {/* <Box
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons={false}
                    aria-label="scrollable prevent tabs example"
                > */}

                {[1, 2, 3, 4, 5, 6, 7, 8].map((task) => (
                    <Box sx={{
                        width: "300px",
                        height: "274px",
                        bgcolor: "background.paper",
                        margin: "4px",
                        border: 1,
                    }}>
                        <Box sx={{
                            display: "flex",
                            ml: 1.5,
                            itemsAlign: "center",
                            mt: 1,
                        }}>
                            <LensIcon sx={{
                                color: "red",
                                fontSize: 15,
                                mt: "9px",
                                mr: "5px",
                                outline: "Sharp"
                            }} />
                            <Typography variant="h6" sx={{
                                fontWeight: "bold",
                            }}>Task Title</Typography>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginX: 2.2,
                            mt: 1,
                        }}>
                            <Typography variant="span" fontWeight="bold"> 2/4 </Typography>
                            <Typography variant="span" fontWeight="bold"> To </Typography>
                            <Typography variant="span" fontWeight="bold"> 2/4 </Typography>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Divider sx={{
                                my: 1.5,
                                width: "80%",
                                fontWeight: "bold",
                            }} />
                        </Box>
                        <Box
                            sx={{
                                width: "full",
                                overflow: "auto",
                                bgcolor: "background.paper",
                                paddingX: 2,
                                textAlign: "justify",
                                minHeight: "125px",
                            }}
                        >
                            <SubdirectoryArrowRightIcon sx={{
                                mr: 0.7,
                                mb: 0.7,
                            }} />
                            lorm ipsum dolor sit amet consectetur adipisicing elit. Repudiandae numquam itaque error voluptas labore amet quia, qui eaque sit in!
                        </Box>
                        <Stack direction="row" >
                            <Tooltip title="Save As Task" arrow>
                                <Button
                                    sx={{
                                        width: "100%",
                                        borderRadius: "0px",
                                    }}
                                    variant="outlined"
                                >
                                    <AddTaskIcon sx={{
                                        fontSize: 18,
                                    }} />
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
                                    <DataSaverOnIcon sx={{
                                        fontSize: 18,
                                    }} />
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
                                    <HighlightOffIcon sx={{
                                        fontSize: 18,
                                    }} />
                                </Button>
                            </Tooltip>
                        </Stack>
                    </Box >
                ))}

                {/* </Box> */}
            </Box>
        </Box>
    )
}