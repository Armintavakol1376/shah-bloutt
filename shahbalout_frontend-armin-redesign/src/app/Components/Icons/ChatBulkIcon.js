import React from 'react';

const ChatBulkIcon = ({ Size, Fill }) => {
    return (
        <svg
            width={Size}
            height={Size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                opacity="0.4"
                d="M7 18.4302H11L15.45 21.3902C16.11 21.8302 17 21.3602 17 20.5602V18.4302C20 18.4302 22 16.4302 22 13.4302V7.43018C22 4.43018 20 2.43018 17 2.43018H7C4 2.43018 2 4.43018 2 7.43018V13.4302C2 16.4302 4 18.4302 7 18.4302Z"
                fill={Fill}
            />
            <path
                d="M15.5 11.25H8.5C8.09 11.25 7.75 10.91 7.75 10.5C7.75 10.09 8.09 9.75 8.5 9.75H15.5C15.91 9.75 16.25 10.09 16.25 10.5C16.25 10.91 15.91 11.25 15.5 11.25Z"
                fill={Fill}
            />
        </svg>
    );
};

export default ChatBulkIcon;
