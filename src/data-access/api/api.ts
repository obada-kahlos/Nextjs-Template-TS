import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
        prepareHeaders: async (headers) => {
            headers.set('Content-Type', `application/json`);
            // headers.set('x-hasura-admin-secret', `myadminsecretkey`);
            return headers;
        },
        // credentials: 'include'
    }),
    endpoints: () => ({})
});
