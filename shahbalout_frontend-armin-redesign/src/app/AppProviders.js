'use client';
import React from 'react';

import { NextUIProvider } from '@nextui-org/react';
import ThemeContextProvider from './ContextArea/ThemeContext';

import { Provider } from 'react-redux';
import storika from './ReduxState/store';

const AppProviders = ({ children }) => {
    return (
        <Provider store={storika}>
            <NextUIProvider>
                <ThemeContextProvider>{children}</ThemeContextProvider>
            </NextUIProvider>
        </Provider>
    );
};

export default AppProviders;
