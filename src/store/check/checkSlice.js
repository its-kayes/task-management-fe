import { createSlice } from "@reduxjs/toolkit";

export const checkSlice = createSlice({
  name: "check",
  initialState: {
    value: 5,
  },
});

export default checkSlice.reducer;
