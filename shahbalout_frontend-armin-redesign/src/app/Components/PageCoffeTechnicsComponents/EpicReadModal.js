'use client';
import React, { useContext, useState } from 'react';
import { ThemeContextExp } from '@/app/ContextArea/ThemeContext';
import { BASEURL } from '@/app/ReduxState/BaseUrl';

import {
    Chip,
    Button,
    Avatar,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
    RadioGroup,
    Radio,
} from '@nextui-org/react';

const EpicReadModal = ({ Openation, onClickFrom, PersianTtl, EnglishTtl, ImgOne, Data }) => {
    const [
        darkMode,
        setDarkMode,
        persianLan,
        setPersianLan,
        modalMission,
        setModalMission,
        cartItems,
        setCartItems,
    ] = useContext(ThemeContextExp);

    function speak(text) {
        let utterance = new SpeechSynthesisUtterance(`${text}`);
        let voicesArray = speechSynthesis.getVoices();
        utterance.voice = voicesArray[2];
        speechSynthesis.speak(utterance);
    }

    return (
        <div>
            <Modal isOpen={Openation} scrollBehavior={'inside'} size={'5xl'}>
                <ModalContent>
                    <ModalHeader
                        className={
                            persianLan
                                ? 'flex flex-col gap-1 font-modamBl text-right m-2'
                                : 'flex flex-col gap-1 font-modamBl text-left m-2'
                        }
                    >
                        {persianLan ? Data.postTitlePersian : Data.postTitleEnglish}
                    </ModalHeader>
                    <ModalBody className="overflow-x-hidden">
                        <img
                            className="w-full h-60 m-1 rounded-lg object-cover shadow-xl"
                            src={`${BASEURL}/GettyImages/CoffeeBlog?image=${Data.banner}`}
                        />

                        {Data.postSections.map((itm, index = 0) => (
                            <div key={index}>
                                <span
                                    className={
                                        darkMode
                                            ? persianLan
                                                ? 'text-lg font-modamBo text-darkTxtTwo text-right'
                                                : 'text-lg font-modamBo text-darkTxtTwo text-left'
                                            : persianLan
                                            ? 'text-lg font-modamBo text-lightTxtTwo text-right'
                                            : 'text-lg font-modamBo text-lightTxtTwo text-left'
                                    }
                                >
                                    {persianLan ? itm.sectionTitlePersian : itm.sectionTitleEnglish}
                                </span>
                                <div
                                    className={
                                        persianLan
                                            ? 'w-full flex flex-row-reverse items-center'
                                            : 'w-full flex flex-row items-center'
                                    }
                                >
                                    <Button
                                        isIconOnly
                                        color="warning"
                                        //variant="faded"
                                        aria-label="play a text"
                                        onPress={() =>
                                            speak(JSON.stringify(itm.sectionContentEnglish))
                                        }
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-4 h-4"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </Button>
                                    <span
                                        className={
                                            darkMode
                                                ? persianLan
                                                    ? 'text-xs m-1 font-modamEL text-darkTxtTwo text-right'
                                                    : 'text-xs m-1 font-modamEL text-darkTxtTwo text-left'
                                                : persianLan
                                                ? 'text-xs m-1 font-modamEL text-lightTxtTwo text-right'
                                                : 'text-xs m-1 font-modamEL text-lightTxtTwo text-left'
                                        }
                                    >
                                        {persianLan
                                            ? '(خواندن متن هر قسمت از مقاله تنها قادر به خواندن ترجمه انگلیسی می باشد)'
                                            : 'play the section*'}
                                    </span>
                                </div>
                                <span
                                    className={
                                        darkMode
                                            ? persianLan
                                                ? 'text-lg font-modamR text-darkTxtTwo text-right'
                                                : 'text-lg font-modamR text-darkTxtTwo text-left'
                                            : persianLan
                                            ? 'text-lg font-modamR text-lightTxtTwo text-right'
                                            : 'text-lg font-modamR text-lightTxtTwo text-left'
                                    }
                                >
                                    {persianLan
                                        ? itm.sectionContentPersian
                                        : itm.sectionContentEnglish}
                                </span>
                                <img
                                    className="w-60 h-60 m-1 rounded-lg object-cover shadow-xl"
                                    src={`${BASEURL}/GettyImages/CoffeeBlog?image=${itm.image}`}
                                />
                            </div>
                        ))}
                        {/* <button onClick={() => speak(EnglishTtl)} className="my-10">
                            Fasder
                        </button> */}
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="danger"
                            variant="shadow"
                            className="w-full p-4"
                            onPress={onClickFrom}
                        >
                            {persianLan ? 'بستن' : 'Close'}
                        </Button>
                        {/* <Button color="primary" onPress={onClickFrom}>
                            Action
                        </Button> */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default EpicReadModal;
