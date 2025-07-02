"use client";
import React, { useContext, useState } from "react";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";
import Lottison from "../Global/Lottison";
import callUs from "../../../../public/assets/lotties/callUs.json";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import { Icon } from "leaflet";
// import "leaflet/dist/leaflet.css";

const MapSection = () => {
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

  const [geoData, setGeoData] = useState({ lat: 29.633357, lng: 52.528078 });

  return (
    <div className="w-full  backdrop-blur-lg  rounded-xl p-10 gap-10 flex flex-col items-center">
      <span
        className={`${
          darkMode ? "text-darkTxtOne text-xl" : "text-lightTxtOne text-xl"
        }
      ${persianLan ? "text-right" : "text-left"}
  }    font-modamBl `}
      >
        {persianLan ? ": ارتباط با ما" : "King of Coffee Land"}
      </span>
      <address>
        {/* <span
          className={`${darkMode ? "text-darkTxtOne" : "text-lightTxtOne"}
      ${persianLan ? "text-right" : "text-left"}
  }    font-modamR`}
        >
          {persianLan
            ? "شیراز / خیابان ارم / کوچه ۱۵ نبش کوچه ۱۵/۲"
            : "Eram St. / Alley 15/2 / Shiraz / Iran"}
        </span> */}
      </address>

      <div
        className={
          persianLan
            ? "w-11/12 flex flex-row-reverse items-center justify-center mx-4  border border-dashed border-[rgba(200,200,200,0.6)] rounded-lg py-2 cursor-help px-4"
            : "w-11/12 flex flex-row items-center mx-4  border border-dashed border-[rgba(200,200,200,0.6)] rounded-lg py-2 pl-2 cursor-help"
        }
      >
        <div className="w-12">
          <Lottison Anime={callUs} />
        </div>
        <a
          className={
            darkMode
              ? "text-darkTxtOne text-xs font-modamBo mx-2 text-right"
              : "text-lightTxtOne text-xs font-modamBo mx-2 text-right"
          }
          href="tel:+989389459503"
        >
          {persianLan
            ? "تماس با ما"
            : "Call us! just click here. "}
        </a>
        <a
          className={
            darkMode
              ? "text-darkTxtOne text-sm font-modamL mr-1"
              : "text-lightTxtOne text-sm font-modamL mr-1"
          }
           href="tel:+989389459503"
        >
          +989389459503
        </a>
      </div>

      <div
        className={
          persianLan
            ? "w-11/12 flex flex-row-reverse items-center justify-center mx-4  border border-dashed border-[rgba(200,200,200,0.6)] rounded-lg py-2 cursor-help px-4"
            : "w-11/12 flex flex-row items-center mx-4  border border-dashed border-[rgba(200,200,200,0.6)] rounded-lg  py-2 pl-2 cursor-help"
        }
      >
          <img
                src={'/assets/imgs/icon/instagramIcon.png'}
                className="w-12 h-12  object-contain hover:-translate-y-4 transition-all"
            />
        <a
          className={
            darkMode
              ? "text-darkTxtOne text-xs font-modamBo mx-2 text-right"
              : "text-lightTxtOne text-xs font-modamBo mx-2 text-right"
          }
          href="https://www.instagram.com/shaahbalout/profilecard/?igsh=MXUyNjM3NHFhcnp4MA=="
        >
          {persianLan
            ? "آدرس صفحه اینستاگرام ما"
            : "our instagram page "}
        </a>
        <a
          className={
            darkMode
              ? "text-darkTxtOne text-sm font-modamL "
              : "text-lightTxtOne text-sm font-modamL "
          }
           href="https://www.instagram.com/shaahbalout/profilecard/?igsh=MXUyNjM3NHFhcnp4MA=="
        >
      @Shaahbalout
        </a>
      </div>

      <div
        className={
          persianLan
            ? "w-11/12 flex flex-row-reverse items-center justify-center mx-4  border border-dashed border-[rgba(200,200,200,0.6)] rounded-lg  py-2 cursor-help px-4"
            : "w-11/12 flex flex-row items-center mx-4  border border-dashed border-[rgba(200,200,200,0.6)] rounded-lg  py-2 pl-2 cursor-help"
        }
      >
       
        <img
                src={'/assets/imgs/icon/youtubeIcon.png'}
                className="w-12 h-12  object-contain hover:-translate-y-4 transition-all"
            />
       
        <a
          className={
            darkMode
              ? "text-darkTxtOne text-xs font-modamBo mx-2 text-right"
              : "text-lightTxtOne text-xs font-modamBo mx-2 text-right"
          }
          href="https://youtube.com/@shahbalout?si=CGp5lmy1OJTGMpxB"
        >
          {persianLan
            ? "آدرس کانال یوتیوب ما"
            : "Our youtube channel"}
        </a>
        <a
          className={
            darkMode
              ? "text-darkTxtOne text-sm font-modamL "
              : "text-lightTxtOne text-sm font-modamL "
          }
           href="https://youtube.com/@shahbalout?si=CGp5lmy1OJTGMpxB"
        >
       @Shahbalout

        </a>
      </div>
      <div className="w-full h-0   rounded-xl overflow-hidden">
        {/* <MapContainer
          center={[geoData.lat, geoData.lng]}
          zoom={12}
          style={{ height: "90vh" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {geoData.lat && geoData.lng && (
            <Marker position={[geoData.lat, geoData.lng]} />
          )}
        </MapContainer> */}
    
      </div>
    </div>
  );
};

export default MapSection;
