import { apiSlice } from "../api";


const extendedApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: "/posts",
                cache: "force-cache",
                method: "GET"
            })
        })
    })
})


export const { useGetProductsQuery } = extendedApi