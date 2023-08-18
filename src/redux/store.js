import { configureStore } from "@reduxjs/toolkit";
import { hotelsApi } from "./features/hotelsApi";

const store = configureStore({
  reducer: {
    [hotelsApi.reducerPath]: hotelsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hotelsApi.middleware),
});

export default store;
