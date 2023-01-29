import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const storeEvents = createAsyncThunk(
  "events/storeEvents",
  async (event, { rejectWithValue, fulfillWithValue }) => {}
);

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    events: [],
    isLoading: false,
    error: null,
  },
  reducer: {
    getEventsStart(state) {
      state.isLoading = true;
    },
    getEventsSuccess(state, action) {
      state.events = action.payload;
      state.isLoading = false;
    },
    getEventsFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    addEventStart(state) {
      state.isLoading = true;
    },
    addEventSuccess(state, action) {
      state.events.push(action.payload);
      state.isLoading = false;
    },
    addEventFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    deleteEventStart(state) {
      state.isLoading = true;
    },
    deleteEventSuccess(state, action) {
      state.events = state.events.filter(
        (event) => event.id !== action.payload
      );
      state.isLoading = false;
    },
    deleteEventFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    updateEventStart(state) {
      state.isLoading = true;
    },
    updateEventSuccess(state, action) {
      state.events = state.events.map((event) =>
        event.id === action.payload.id ? action.payload : event
      );
      state.isLoading = false;
    },

    updateEventFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    clearEvents(state) {
      state.events = [];
    },

    clearError(state) {
      state.error = null;
    },
  },
});

export const {
  getEventsStart,
  getEventsSuccess,
  getEventsFailure,
  addEventStart,
  addEventSuccess,
  addEventFailure,
  deleteEventStart,
  deleteEventSuccess,
  deleteEventFailure,
  updateEventStart,
  updateEventSuccess,
  updateEventFailure,
  clearEvents,
  clearError,
} = eventsSlice.actions;

export default eventsSlice.reducer;

// try {
//     const response = await fetch('http://localhost:3001/events', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(event),
//     });
//     if (!response.ok) {
//     throw new Error('Could not store event!');
//     }
//     const data = await response.json();
//     return data;
// } catch (error) {
//     return rejectWithValue(error.message);
// }
