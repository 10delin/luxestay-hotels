import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL =
  "https://raw.githubusercontent.com/10delin/luxestay-hotels.json/main/roomsApi.json";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const hotelsApi = createApi({
  baseQuery,
  endpoints: (builder) => ({
    getHotel: builder.query({
      query: () => "",
      transformResponse: (response) => response,
    }),
  }),
});

export const { useGetHotelQuery } = hotelsApi;
