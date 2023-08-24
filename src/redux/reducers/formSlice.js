import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    surname: "",
    email: "",
    country: "",
  },

  reducers: {
    setForm: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setForm } = formSlice.actions;
export default formSlice.reducer;
