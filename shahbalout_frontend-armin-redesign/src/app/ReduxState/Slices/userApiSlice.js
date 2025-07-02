import { apiSlice } from './apiSlice';
const USERS_URL = '/User';
//https://dev.to/raaynaldo/rtk-query-tutorial-crud-51hl

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registerByPhone: builder.mutation({
            query: (data) => ({
                url: '/User/RegisterByPhone',
                method: 'POST',
                body: data,
            }),
        }),
        loginByPhone: builder.mutation({
            query: (data) => ({
                url: '/User/PhoneOtpSendAgain',
                method: 'POST',
                body: data,
            }),
        }),

        sentOtpByPhone: builder.mutation({
            query: (data) => ({
                url: '/User/PhoneOtpVerify',
                method: 'POST',
                body: data,
            }),
        }),

        registerByEmail: builder.mutation({
            query: (data) => ({
                url: '/User/RegisterByEmail',
                method: 'POST',
                body: data,
            }),
        }),
        loginByEmail: builder.mutation({
            query: (data) => ({
                url: '/User/EmailOtpSendAgain',
                method: 'POST',
                body: data,
            }),
        }),

        sentOtpByEmail: builder.mutation({
            query: (data) => ({
                url: '/User/EmailOtpVerify',
                method: 'POST',
                body: data,
            }),
        }),

        updateProfile: builder.mutation({
            query: (data) => ({
                url: '/User/Profile',
                method: 'PUT',
                body: data,
            }),
        }),

        getAllUsersByAdmin: builder.query({
            query: ({ pageNumber, keyword }) => ({
                url: '/User/AllUsers',
                params: { pageNumber, keyword },
                keepUnusedDataFor: 5,
            }),
        }),
    }),
});

export const {
    useLoginByPhoneMutation,
    useRegisterByPhoneMutation,
    useSentOtpByPhoneMutation,
    useRegisterByEmailMutation,
    useLoginByEmailMutation,
    useSentOtpByEmailMutation,
    useUpdateProfileMutation,
    useGetAllUsersByAdminQuery,
} = userApiSlice;
