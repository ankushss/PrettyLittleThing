import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const dressApi = createApi({
  reducerPath: 'dressApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://my-json-server.typicode.com/benirvingplt/products',
  }),
  endpoints: builder => ({
    getDresses: builder.query({
      query: () => '/products',
    }),
  }),
});

export const {useGetDressesQuery} = dressApi;
