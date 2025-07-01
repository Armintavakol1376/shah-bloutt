'use client';

import React, { useContext } from 'react';
import { ThemeContextExp } from '@/app/ContextArea/ThemeContext';
import TransitionEffect1 from '../TransitionEffect1';
import EditProfileMission from './EditProfileMission';
import SignIoModal from './SignIoModal';
import SuccessOrder from './SuccessOrder';
import SuccessAddToCart from './SuccessAddToCart';


export default function EpicModal({onCloseFrom}) {
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

 
    return (
        <>
            {modalMission.appear && (
                <div className="fixed w-screen h-screen flex flex-col justify-end md:justify-center items-center backdrop-blur bg-[rgba(200,200,200)] bg-opacity-20 z-50 top-0 right-0">
                        {modalMission.mission == 'Login' && <SignIoModal Default={'Login'} />}
                        {modalMission.mission == 'Register' && <SignIoModal Default={'Register'} />}
                        {modalMission.mission == 'EditProfile' && <EditProfileMission />}
                        {modalMission.mission == 'SuccessOrder' && <SuccessOrder />}
                        {modalMission.mission == 'SuccessAddToCart' && <SuccessAddToCart onCloseFrom={onCloseFrom}/>}
                </div>
            )}
        </>
    );
}

//    <>
//        <Modal
//            isOpen={loginOutModal}
//            onOpenChange={onOpenChange}
//            placement="center"
//            backdrop="blur"
//            className={
//                darkMode ? 'bg-darkBg border-3 border-lightBg border-opacity-20' : 'bg-lightBg'
//            }
//        >
//            <ModalContent>
//                {(onClose) => (
//                    <>
//                        <img
//                            src="assets/imgs/products/frenchCoffee1.jpg"
//                            className="w-full h-60 object-cover bg-[#ad1037] transition-all duration-100"
//                        />
//                        <ModalHeader className="flex flex-col gap-1">Log in | ورود</ModalHeader>
//                        <ModalBody>
//                            <div className="w-full flex flex-col gap-2">
//                                <Input
//                                    label="Number"
//                                    placeholder="Enter your email"
//                                    value={value}
//                                    onValueChange={setValue}
//                                    className="w-full bg-[#ad1037]"
//                                />

//                                <Input type="email" variant="bordered" label="Email" />
//                                <p className=" text-small">Input value: {value}</p>
//                            </div>
//                        </ModalBody>
//                        <ModalFooter>
//                            <Button
//                                color="danger"
//                                variant="flat"
//                                className="w-full"
//                                onPress={() => setLoginOutModal(false)}
//                            >
//                                {persianLan ? 'بستن' : 'Close'}
//                            </Button>
//                            <Button
//                                color="danger"
//                                className="w-full"
//                                variant="shadow"
//                                onPress={onClose}
//                            >
//                                {persianLan ? 'ورود' : 'Sign in'}
//                            </Button>
//                        </ModalFooter>
//                    </>
//                )}
//            </ModalContent>
//        </Modal>
//    </>;
