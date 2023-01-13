import { configureStore } from "@reduxjs/toolkit";
import checkReducer from "./check/checkSlice";

const store = configureStore({
  reducer: {
    check: checkReducer,
  },
});
export default store;
