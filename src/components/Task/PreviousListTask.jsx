import { Box, Divider, Typography } from "@mui/material";
import PreviewIcon from '@mui/icons-material/Preview';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function PreviousListTask() {
    return (
        <Box>
            <Typography variant="h6" sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                color: "#000",
            }}>
                Previous List Task
            </Typography>
            <Box sx={{
                my: 1,
                display: "flex",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Divider sx={{
                    width: "80%",
                }} />
            </Box>
            <Box sx={{
                maxHeight: 247,
                overflowY: "scroll",
                "&::-webkit-scrollbar": {
                    display: "none",
                },
            }}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((task) => (
                    <Item>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            px: 0.8,
                            py: 0.6,
                            // borderRadius: 0.6,
                            borderTopLeftRadius: 10,
                            border: "1px solid",
                            borderColor: "#000",
                        }}>
                            <Typography variant="h6" sx={{
                                fontSize: "0.9rem",
                                fontWeight: "bold",
                                // color: "#000",
                                // mb: 2,
                            }}>
                                <li>  Task Page Design for TASK MGT Project </li>
                            </Typography>
                            <PreviewIcon />
                        </Box>
                    </Item>
                ))}
            </Box>
        </Box>
    )
}