import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { BASEURL } from '../BaseUrl';

const baseQuery = fetchBaseQuery({
    baseUrl: BASEURL,

    prepareHeaders: async (headers) => {
        headers.set('Content-Type', 'application/json');

        const access_token = await JSON.parse(localStorage.getItem('userInfo'));
        if (access_token) {
            headers.set('Authorization', `Bearer ${access_token.BaracudaCoin}`);
        }
        return headers;
    },
});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User', 'Products', 'AdminOrders'],
    endpoints: (builder) => ({}),
});
