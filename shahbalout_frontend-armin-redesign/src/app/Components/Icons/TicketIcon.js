import React from 'react';

const TicketIcon = ({ Size, Fill }) => {
    return (
        <svg
            width={Size}
            height={Size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10 9.08V6.25C9.59 6.25 9.25 5.91 9.25 5.5V3.25H7C2.59 3.25 1.25 4.59 1.25 9V9.5C1.25 9.91 1.59 10.25 2 10.25C2.96 10.25 3.75 11.04 3.75 12C3.75 12.96 2.96 13.75 2 13.75C1.59 13.75 1.25 14.09 1.25 14.5V15C1.25 19.41 2.59 20.75 7 20.75H9.25V18.5C9.25 18.09 9.59 17.75 10 17.75V14.92C9.59 14.92 9.25 14.58 9.25 14.17V9.83C9.25 9.42 9.59 9.08 10 9.08Z"
                fill={Fill}
            />
            <path
                opacity="0.4"
                d="M20.25 12.5C20.25 13.46 21.04 14.25 22 14.25C22.41 14.25 22.75 14.59 22.75 15C22.75 19.41 21.41 20.75 17 20.75H10.75V18.5C10.75 18.09 10.41 17.75 10 17.75V14.92C10.41 14.92 10.75 14.58 10.75 14.17V9.83C10.75 9.42 10.41 9.08 10 9.08V6.25C10.41 6.25 10.75 5.91 10.75 5.5V3.25H17C21.41 3.25 22.75 4.59 22.75 9V10C22.75 10.41 22.41 10.75 22 10.75C21.04 10.75 20.25 11.54 20.25 12.5Z"
                fill={Fill}
            />
        </svg>
    );
};

export default TicketIcon;
