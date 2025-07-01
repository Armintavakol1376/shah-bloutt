import { apiSlice } from './apiSlice';
export const blogApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCoffeePosts: builder.query({
            query: ({ pageNumber, keyword }) => ({
                url: '/CoffeeBlog',
                params: { pageNumber, keyword },
                keepUnusedDataFor: 5,
            }),
        }),

        getFoodPosts: builder.query({
            query: ({ pageNumber, keyword }) => ({
                url: '/FoodBlog',
                params: { pageNumber, keyword },
                keepUnusedDataFor: 5,
            }),
        }),
    }),
});

export const { useGetCoffeePostsQuery, useGetFoodPostsQuery } = blogApiSlice;
