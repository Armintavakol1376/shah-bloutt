import * as React from 'react';
const TagGreenIcon = ({ Size }) => (
    <svg
        width={Size}
        height={Size}
        viewBox="-0.5 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M24.7273 1.45455H10.1818C6.96852 1.45455 4.36364 4.05943 4.36364 7.27273V24.7273C4.36364 27.9406 6.96852 30.5455 10.1818 30.5455H24.7273C27.9406 30.5455 30.5455 27.9406 30.5455 24.7273V7.27273C30.5455 4.05943 27.9406 1.45455 24.7273 1.45455Z"
            fill="#5FC424"
        />
        <path
            d="M21.8182 0H5.81818C2.60489 0 0 2.60489 0 5.81818V26.1818C0 29.3951 2.60489 32 5.81818 32H21.8182C25.0315 32 27.6364 29.3951 27.6364 26.1818V5.81818C27.6364 2.60489 25.0315 0 21.8182 0Z"
            fill="url(#paint0_linear_103_1782)"
        />
        <path
            d="M4.36364 17.4545L8 15.2727L11.6364 17.4545V6.54545C11.6364 5.34047 10.6595 4.36364 9.45454 4.36364H6.54545C5.34047 4.36364 4.36364 5.34047 4.36364 6.54545V17.4545Z"
            fill="white"
            fillOpacity={0.6}
        />
        <defs>
            <linearGradient
                id="paint0_linear_103_1782"
                x1={15.2727}
                y1={0}
                x2={15.2727}
                y2={32}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#A2E458" />
                <stop offset={1} stopColor="#50CD06" />
            </linearGradient>
        </defs>
    </svg>
);
export default TagGreenIcon;
