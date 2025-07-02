import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './Slices/apiSlice';
import authReducer from './Slices/authSlice';
import cartSlice from './Slices/cartSlice';

const storika = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        cart: cartSlice,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

export default storika;
