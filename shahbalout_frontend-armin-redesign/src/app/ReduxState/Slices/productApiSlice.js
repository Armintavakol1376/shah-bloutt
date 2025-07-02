import { apiSlice } from './apiSlice';
const PRODUCTS_URL = '/Products';

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.mutation({
            query: (data) => ({
                url: '/Products',
                method: 'GET',
                body: data,
            }),
        }),

        getAllProducts: builder.query({
            query: ({ keyword, pageNumber }) => ({
                url: '/Products',
                params: { keyword, pageNumber },
            }),

            keepUnusedDataFor: 5,
            providesTags: ['Products'],
        }),

        createProduct: builder.mutation({
            query: (data) => ({
                url: '/Products',
                method: 'POST',
                body: data,
            }),
        }),

        updateProduct: builder.mutation({
            query: (data) => ({
                url: '/Products',
                method: 'PATCH',
                body: data,
            }),
        }),

        deleteProduct: builder.mutation({
            query: (data) => ({
                url: '/Products',
                method: 'DELETE',
                body: data,
            }),
        }),

        uploadProductImg: builder.mutation({
            query: (data) => ({
                url: '/ImgUpload/ProductImgs',
                method: 'POST',
                body: data,
                formData: true,
            }),
        }),
    }),
});

export const {
    useGetProductsMutation,
    useGetAllProductsQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useUploadProductImgMutation,
    useDeleteProductMutation
} = productApiSlice;
