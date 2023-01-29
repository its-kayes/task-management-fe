import { Box } from "@mui/material";

export default function Test() {
  return (
    <div className="flex  ">
      {
        [1, 2, 3,].map((item) => (
          <Box mx={2}>
            check {item}
          </Box>
        ))
      }
    </div>
  )
}