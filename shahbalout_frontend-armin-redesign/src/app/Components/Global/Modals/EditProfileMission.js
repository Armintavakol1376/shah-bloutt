"use client";
import React, { useContext, useState } from "react";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";
import { Button } from "@nextui-org/react";
import CloseBulkIcon from "../../Icons/CloseBulkIcon";
import InputCustom from "../InputCustom";

import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "@/app/ReduxState/Slices/authSlice";
import { useUpdateProfileMutation } from "@/app/ReduxState/Slices/userApiSlice";

const EditProfileMission = () => {
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

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading, isSuccess, isError, error, data, reset }] =
    useUpdateProfileMutation();

  const [profile, setProfile] = useState({
    name: userInfo?.user?.name,
    number: userInfo?.user?.numberVerify? userInfo.user.number : 0,
    address: userInfo?.user?.address,
    zipCode: userInfo?.user?.zipCode,
    avatar: null,
    nickname: null,
    email: userInfo?.user?.emailVerify? userInfo.user.email : "",
    aboutme: null,
  });

  const updateProfileHandle = async () => {
    try {
      const res = await updateProfile({ profile: profile }).unwrap();
      if (res.success) {
        dispatch(setCredentials({ ...res }));
        setModalMission({ ...modalMission, appear: false }); 
      }
    } catch (error) {
      console.log("updateerror:", error);
    }
  };

  const itx = () => {
    console.log("isSuccess: ", isSuccess);
    console.log("data: ", data);
    console.log("error: ", error);
    console.log("reset: ", reset);

    console.log("userInfo: ", userInfo);
  };

  return (
    <div
      className={
        darkMode
          ? "w-screen flex flex-col items-center md:w-96 pb-24 md:pb-20  mt-auto mb-0 rounded-t-3xl border-3 border-lightBg border-opacity-30 my-2 z-10 md:mx-0 backdrop-blur rounded-2xl p-4 pt-6 bg-darkBg bg-opacity-80 "
          : "w-screen flex flex-col items-center md:w-96 pb-24 md:pb-20  mt-auto mb-0 rounded-t-3xl z-50 border-0 border-lightBg border-opacity-10 my-2 md:mx-0 backdrop-blur rounded-2xl p-4 pt-6 bg-lightBg"
      }
    >
      <div className="w-full h-25 -mt-12  flex justify-end z-0">
        <img
          src="assets/imgs/icon/idcard.png"
          onClick={itx}
          className="w-20 h-20  object-contain bg-transparent rounded-xl drop-shadow-xl "
        />

        <Button
          isIconOnly
          color="light"
          onClick={() => setModalMission({ ...modalMission, appear: false })}
          className="w-10 h-10  mt-auto mb-2"
        >
          <CloseBulkIcon Size={48} Fill={darkMode ? "#ad1037" : "#292D32"} />
        </Button>
      </div>

      {isError && (
        <span
          className={
            "font-modamBo text-sm text-[#ad1037] text-center px-2 pt-2 pb-4"
          }
        >
          {persianLan
            ? "لطفا دوباره تلاش نمایید و یا با ادمین تماس بگیرید اطلاعات شما در دسترس نیست"
            : error.data.message}
        </span>
      )}

      {!isSuccess ? (
        <>

{/* { userInfo?.user?.name && <div className="w-full flex flex-row-reverse items-center  mt-2 mr-4 gap-2"> <span
          className={
            "font-modamBo text-sm text-[#ad1037] text-center"
          }
        >
         :نام فعلی
   </span>


      <span
          className={
            "font-modamR text-sm text-[#ad1037] text-center"
          }
        >
     {userInfo?.user?.name }
        </span> </div>} */}
          <InputCustom
            Title={persianLan ? ":نام شما" : "Name:"}
            Value={profile.name}
            PlaceHolder={persianLan ? "نام شما" : "insert your name"}
            AutoComplete={"name"}
            onChangeFrom={(e) => {
              return setProfile({ ...profile, name: e.target.value });
            }}
          />
          {!userInfo?.user?.numberVerify && (
            <InputCustom
              Title={persianLan ? ":شماره همراه شما" : "Mobile Number:"}
              Value={profile.number}
              PlaceHolder={persianLan ? "همراه شما" : "insert your name"}
              AutoComplete={"name"}
              onChangeFrom={(e) => {
                return setProfile({ ...profile, number: e.target.value });
              }}
            />
          )}
          {/* {!userInfo?.user?.emailVerify && (
            <InputCustom
              Title={persianLan ? ": ایمیل شما" : " Email:"}
              Value={profile.email}
              PlaceHolder={persianLan ? "ایمیل شما" : "insert your email"}
              AutoComplete={"name"}
              onChangeFrom={(e) => {
                return setProfile({ ...profile, email: e.target.value });
              }}
            />
          )} */}


      

{/* { userInfo?.user?.address &&  <div className="w-full flex flex-row-reverse flex-wrap items-center mt-2 gap-2"> <span
          className={
            "font-modamBo text-xs text-[#ad1037] text-right"
          }
        >
         :آدرس فعلی
   </span>


      <span
          className={
            "font-modamR text-xs text-[#ad1037] text-right"
          }
        >
     {userInfo?.user?.address }
        </span> </div>} */}

          <InputCustom
            TxtArea={true}
            Title={persianLan ? ": آدرس شما" : " Addrerss:"}
            Value={profile.address}
            PlaceHolder={persianLan ? "آدرس شما" : "inser your address please"}
            AutoComplete={"address"}
            onChangeFrom={(e) => {
              return setProfile({
                ...profile,
                address: e.target.value,
              });
            }}
          />


{/* { userInfo?.user?.zipCode &&  <div className="w-full flex flex-row-reverse flex-wrap items-center mt-2 gap-2"> <span
          className={
            "font-modamBo text-xs text-[#ad1037] text-right"
          }
        >
         :کد پستی فعلی
   </span>


      <span
          className={
            "font-modamR text-xs text-[#ad1037] text-right"
          }
        >
     {userInfo?.user?.zipCode }
        </span> </div>} */}

<InputCustom
            //TxtArea={true}
            Title={persianLan ? ": کد پستی شما" : " Addrerss:"}
            Value={profile.zipCode}
            PlaceHolder={persianLan ? "کد پستی شما" : "inser your address please"}
            AutoComplete={"address"}
            onChangeFrom={(e) => {
              return setProfile({
                ...profile,
                zipCode: e.target.value,
              });
            }}
          />



          <Button
            color="danger"
            variant="flat"
            className="w-full py-8 my-2 text-lg"
            onPress={() => setModalMission({ ...modalMission, appear: false })}
          >
            {persianLan ? "بستن" : "close"}
          </Button>

          <Button
            color="success"
            className="w-full py-8 my-2 text-lg"
            onPress={updateProfileHandle}
            isLoading={isLoading}
            spinner={
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="hds-flight-icon--animation-loading animate-spin"
              >
                <g fill="#000000" fillRule="evenodd" clipRule="evenodd">
                  <path
                    d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                    opacity=".2"
                  />

                  <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z" />
                </g>
              </svg>
            }
          >
            {persianLan ? "ثبت" : "Submit"}
          </Button>
        </>
      ) : null}
    </div>
  );
};

export default EditProfileMission;
