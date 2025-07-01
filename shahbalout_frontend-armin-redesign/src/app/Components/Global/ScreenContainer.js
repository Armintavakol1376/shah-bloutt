'use client';
import React from 'react';

const ScreenContainer = ({ children }) => {
    return (
        <div className="w-full px-6 md:px-8 md:w-11/12  pb-10 gap-y-4 lg:px-20 lg:w-10/12  mx-auto">
            {children}
        </div>
    );
};

export default ScreenContainer;
