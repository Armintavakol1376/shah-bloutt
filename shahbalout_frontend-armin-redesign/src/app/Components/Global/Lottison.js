'use client';
import React from 'react';
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const Lottison = ({ Anime }) => {
    const defaultoptions = {
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return <Lottie defaultoptions={defaultoptions} animationData={Anime} />;
};

export default Lottison;
