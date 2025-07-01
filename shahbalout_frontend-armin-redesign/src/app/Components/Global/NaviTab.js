"use client";
import React, { useContext } from "react";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext.js";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Switch,
  Avatar,
} from "@nextui-org/react";
import { MoonIcon } from "../Icons/MoonIcon.js";
import { SunIcon } from "../Icons/SunIcon.js";

import MenuBulkIcon from "../Icons/MenuBulkIcon.js";
import CloseBulkIcon from "../Icons/CloseBulkIcon.js";

import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale } from "./NaviIcons.js";

export default function NaviTab({ activeLink, Logo }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [darkMode, setDarkMode, persianLan, setPersianLan, modalMission, setModalMission, cartItems, setCartItems] =
    useContext(ThemeContextExp);

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  const menuItems = [
    { engTtl: "Home", persianTtl: "خانه", link: "/" },
    { engTtl: "Store", persianTtl: "فروشگاه", link: "/Store" },
    { engTtl: "Cart", persianTtl: "سبد خرید", link: "/Store/Cart" },
    {
      engTtl: "Choice of Coffee Maker",
      persianTtl: "انتخاب قهـــــوه ساز",
      link: "/CoffeeTechnics",
    },
    {
      engTtl: "Winning Combination",
      persianTtl: "ترکیب برنده",
      link: "/WinnerBlend",
    },

    { engTtl: "Profile", persianTtl: "پروفایل", link: "/Profile" },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={"bg-darkBg bg-opacity-5 backdrop-blur-xl  pt-3 pb-2 justify-center"}
    >
      <div className="flex flex-row items-center z-50">
        <Button isIconOnly color="light" onClick={() => setIsMenuOpen(!isMenuOpen)} className="sm:hidden">
          {!isMenuOpen ? (
            <MenuBulkIcon Size={48} Fill={activeLink == "Home" || darkMode ? "#f9f9f9" : "#292D32"} />
          ) : (
            <CloseBulkIcon Size={48} Fill={activeLink == "Home" || darkMode ? "#f9f9f9" : "#292D32"} />
          )}
        </Button>

        <Button variant={activeLink == "Home" || darkMode ? "light" : "flat"} size="sm" className="scale-90">
          <Switch
            defaultSelected={darkMode ? true : false}
            isSelected={darkMode}
        onValueChange={() => {
  setDarkMode((prevState) => {
    const newState = !prevState;
    localStorage.setItem('darkMode', newState.toString());
    return newState;
  });
}}
            size="sm"
            color="warning"
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
            className="scale-80"
          />
        </Button>
        {/* <Button
          variant={activeLink == "Home" || darkMode ? "light" : "flat"}
          size="sm"
          className="scale-90"
          onClick={() => setPersianLan((prevState) => !prevState)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={activeLink == "Home" || darkMode ? "#f9f9f9" : "#12121"}
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M9 2.25a.75.75 0 01.75.75v1.506a49.38 49.38 0 015.343.371.75.75 0 11-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 01-2.969 6.323c.317.384.65.753.998 1.107a.75.75 0 11-1.07 1.052A18.902 18.902 0 019 13.687a18.823 18.823 0 01-5.656 4.482.75.75 0 11-.688-1.333 17.323 17.323 0 005.396-4.353A18.72 18.72 0 015.89 8.598a.75.75 0 011.388-.568A17.21 17.21 0 009 11.224a17.17 17.17 0 002.391-5.165 48.038 48.038 0 00-8.298.307.75.75 0 01-.186-1.489 49.159 49.159 0 015.343-.371V3A.75.75 0 019 2.25zM15.75 9a.75.75 0 01.68.433l5.25 11.25a.75.75 0 01-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 01-1.36-.634l5.25-11.25A.75.75 0 0115.75 9zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726z"
              clipRule="evenodd"
            />
          </svg>{" "}
          <span
            className={
              activeLink == "Home" || darkMode
                ? "text-darkTxtOne"
                : "text-lightTxtOne"
            }
          >
            {persianLan ? "English" : "فارسی"}
          </span>
        </Button> */}
      </div>
      <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" variant="dark" />

      <div className=" flex flex-row justify-end space-x-20 items-center">
        <NavbarContent className="hidden sm:flex gap-4 text-xs font-modamR" justify="center">
          <NavbarItem>
            <Link
              color="foreground"
              className={
                activeLink == "Profile"
                  ? "text-xs font-modamBl text-[#AD1037] drop-shadow-lg"
                  : activeLink == "Profile" || darkMode
                  ? "text-xs font-modamR text-darkTxtOne"
                  : "text-xs font-modamR"
              }
              href="/Profile"
            >
              {persianLan ? "پروفایل" : "Profile"}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              className={
                activeLink == "Winning Combination"
                  ? "text-xs font-modamBl text-[#AD1037] drop-shadow-lg"
                  : activeLink == "Winning Combination" || darkMode
                  ? "text-xs font-modamR text-darkTxtOne"
                  : "text-xs font-modamR"
              }
              href="/WinnerBlend"
            >
              {persianLan ? "ترکیب برنده" : "Winning Combination"}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              className={
                activeLink == "Choice of Coffee Maker"
                  ? "text-xs font-modamBl text-[#AD1037] drop-shadow-lg"
                  : activeLink == "Choice of Coffee Maker" || darkMode
                  ? "text-xs font-modamR text-darkTxtOne"
                  : "text-xs font-modamR"
              }
              href="/CoffeeTechnics"
            >
              {persianLan ? "انتخاب قهـــــوه ساز" : "Choice of Coffee Maker"}
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link
              color="foreground"
              className={
                activeLink == "Cart"
                  ? "text-xs font-modamBl text-[#AD1037] drop-shadow-lg"
                  : activeLink == "Cart" || darkMode
                  ? "text-xs font-modamR text-darkTxtOne"
                  : "text-xs font-modamR"
              }
              href="/Store/Cart"
            >
              {persianLan ? "سبد خرید" : "Cart"}
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link
              color="foreground"
              className={
                activeLink == "Store"
                  ? "text-xs font-modamBl text-[#AD1037] drop-shadow-lg"
                  : activeLink == "Store" || darkMode
                  ? "text-xs font-modamR text-darkTxtOne"
                  : "text-xs font-modamR"
              }
              href="/Store"
            >
              {persianLan ? "فروشگاه" : "Store"}
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link
              color="foreground"
              className={
                activeLink == "Home"
                  ? "text-xs font-modamBl text-[#AD1037] drop-shadow-lg"
                  : activeLink == "Home" || darkMode
                  ? "text-xs font-modamR text-darkTxtOne"
                  : "text-xs font-modamR"
              }
              href="/"
            >
              {persianLan ? "خانه" : "Home"}
            </Link>
          </NavbarItem>
        </NavbarContent>
        {/* 
      {Logo && (
        <NavbarBrand>
       
        </NavbarBrand>
      )} */}

        <img src={"/assets/logo/logoLeft.png"} className="object-contain mx-auto h-12" />
        <NavbarMenu className="pt-8  font-modamBl gap-6">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color="foreground"
                className={
                  activeLink == item.engTtl
                    ? persianLan
                      ? "px-6 w-full text-sm font-modamBl text-[#AD1037] drop-shadow-lg justify-end"
                      : "px-6 w-full text-sm font-modamBl text-[#AD1037] drop-shadow-lg justify-start"
                    : activeLink == "Home" || darkMode
                    ? persianLan
                      ? "px-6 w-full text-sm font-modamR text-lightTxtOne justify-end"
                      : "px-6 w-full text-sm font-modamR text-lightTxtOne justify-start"
                    : persianLan
                    ? "px-6 w-full text-sm font-modamR justify-end"
                    : "px-6 w-full text-sm font-modamR justify-start"
                }
                href={item.link}
                size="lg"
              >
                {persianLan ? item.persianTtl : item.engTtl}
              </Link>
            </NavbarMenuItem>
          ))}

          {/* <Switch
                    defaultSelected={persianLan ? true : false}
                    isSelected={persianLan}
                    onValueChange={() => setPersianLan((prevState) => !prevState)}
                    size="sm"
                    color="warning"
                    className="scale-80"
                >
                    <span>{persianLan ? 'English' : 'فارسی'}</span>
                </Switch> */}
        </NavbarMenu>
      </div>
    </Navbar>
  );
}

//    <nav
//        className="hidden sm:flex w-full items-center justify-center pt-6 pb-6"
//        justify="center"
//    >
//        <Link color="foreground" href="#" className={'font-black text-xs mx-4'}>
//            فروشگاه
//        </Link>
