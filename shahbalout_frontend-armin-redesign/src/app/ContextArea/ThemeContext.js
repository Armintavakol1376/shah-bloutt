'use client';
import React, { useContext, useState, useEffect, createContext } from 'react';

export const ThemeContextExp = createContext();

const ThemeContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
    // if (typeof window !== 'undefined') {
    //     const stored = localStorage.getItem('darkMode');
    //     return stored === 'true';
    // }
    return false;
});

    // Load darkMode from localStorage on first render
    useEffect(() => {
        const storedDarkMode = localStorage.getItem('darkMode');
        if (storedDarkMode !== null) {
           
            setDarkMode(storedDarkMode === 'true');
        }
    }, []);

    // Save darkMode to localStorage whenever it changes
    // useEffect(() => {
    //     localStorage.setItem('darkMode', darkMode.toString());
    //      console.log('Loaded darkMode from localStorage:', darkMode.toString());
    // }, [darkMode]);

    const [persianLan, setPersianLan] = useState(true);
    const [modalMission, setModalMission] = useState({ appear: false, mission: null , id:null });
    const [cartItems, setCartItems] = useState({
        counter: 0,
        items: [
            {
                id: null,
                persianName: null,
                englishName: null,
                brand: null,
                package: null,
                image: null,
                qty: 0,
                price: null,
                productModel: null,
            },
        ],
    });

    return (
        <ThemeContextExp.Provider
            value={[
                darkMode,
                setDarkMode,
                persianLan,
                setPersianLan,
                modalMission,
                setModalMission,
                cartItems,
                setCartItems,
            ]}
        >
            {children}
        </ThemeContextExp.Provider>
    );
};

export default ThemeContextProvider;
