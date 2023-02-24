import { Box, Divider, Typography } from "@mui/material";
import PreviewIcon from '@mui/icons-material/Preview';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import Modal from '@mui/material/Modal';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export default function PreviousListTask() {
    const [value, setValue] = useState('');
    const [open, setOpen] = useState(false);
    const handleOpen = (e) => {
        setValue(e.value)
        setOpen(true)
    };
    const handleClose = () => setOpen(false);
    console.log(open, "open");
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
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((task, index) => (
                    <Item key={task}>
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
                            <Typography variant="h6"
                                sx={{
                                    fontSize: "0.9rem",
                                    fontWeight: "bold",
                                    // color: "#000",
                                    // mb: 2,
                                }}>
                                <li>  Task Page Design for TASK MGT Project </li>
                            </Typography>
                            <PreviewIcon onClick={() => handleOpen({ value: `Value Passing with Modal Click! Index:- ${index}` })} />
                        </Box>
                    </Item>
                ))}
            </Box>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal {`${value}`}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </Box>
    )
}