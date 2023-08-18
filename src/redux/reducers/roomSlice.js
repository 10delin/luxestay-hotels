import { createSlice } from "@reduxjs/toolkit";

export const roomSlice = createSlice({
  name: "room",
  initialState: {
    name: "",
    dates: "",
    board: "",
    price: "",
  },

  reducers: {
    setRoom: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setRoom } = roomSlice.actions;
export default roomSlice.reducer;
