import { configureStore } from "@reduxjs/toolkit";
import checkReducer from "./check/checkSlice";
import eventsReducer from "./events/eventsSlice";

const store = configureStore({
  reducer: {
    check: checkReducer,
    events: eventsReducer,
  },
});
export default store;
