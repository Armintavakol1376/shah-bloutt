"use client";
import React, { useContext, useState, useEffect } from "react";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";
import { Button, Input, Tabs, Tab, Checkbox } from "@nextui-org/react";
import { InputOtp } from "@nextui-org/input-otp";
import CloseBulkIcon from "../../Icons/CloseBulkIcon";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import {
  useLoginByPhoneMutation,
  useRegisterByPhoneMutation,
  useSentOtpByPhoneMutation,
  useRegisterByEmailMutation,
  useLoginByEmailMutation,
  useSentOtpByEmailMutation,
} from "@/app/ReduxState/Slices/userApiSlice";
import { setCredentials } from "@/app/ReduxState/Slices/authSlice";
import InputCustom from "../InputCustom";
import "react-toastify/dist/ReactToastify.css";
const SignIoModal = ({ Default }) => {
  const [darkMode, setDarkMode, persianLan, setPersianLan, modalMission, setModalMission, cartItems, setCartItems] =
    useContext(ThemeContextExp);

  const p2e = (s) => s.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

  const [switchMission, setSwitchMission] = useState(Default);
  const [otpWay, setOtpWay] = useState("Number");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [otp, setOtp] = useState();
  const [seconds, setSeconds] = useState(60);

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  const [loginByPhone, { isLoading, isFetching, isError }] = useLoginByPhoneMutation();
  const [registerByPhone] = useRegisterByPhoneMutation();
  const [sentOtpByPhone] = useSentOtpByPhoneMutation();
  const [registerByEmail] = useRegisterByEmailMutation();
  const [loginByEmail] = useLoginByEmailMutation();
  const [sentOtpByEmail] = useSentOtpByEmailMutation();


    useEffect(() => {
      if((otpWay == "NumberOtpVerify" || otpWay == "EmailOtpVerify") ){
    setModalMission({ ...modalMission, appear: false })
      }

    }, [otpWay]);
 

  const otpSendHandle = async () => {
    otpWay == "NumberOtpSend" ? setOtpWay("NumberOtpProcess") : setOtpWay("EmailOtpProcess");
    try {
      const res =
        otpWay == "NumberOtpSend"
          ? await sentOtpByPhone({ otp: p2e(otp) }).unwrap()
          : await sentOtpByEmail({ otp: p2e(otp) }).unwrap();
      res.success && dispatch(setCredentials({ ...res }));
      res.success && otpWay == "NumberOtpProcess" ? setOtpWay("NumberOtpVerify") : setOtpWay("EmailOtpVerify");
    } catch (error) {
      otpWay == "NumberOtpProcess" ? setOtpWay("NumberOtpSend") : setOtpWay("EmailOtpSend");
      toast.error("کد وارد شده معتبر نیست");
    }
  };

  const registerHandle = async () => {
    try {
         console.log("tttt");
           console.log(otpWay);
let res;

if (otpWay === "Number") {
  setOtpWay("NumberOtpSend")
        const interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
     
  res = await registerByPhone({
    number: Number(p2e(phone)),
    name: name
  }).unwrap();
   return () => clearInterval(interval);
} else {
  res = await registerByEmail({
    email: email,
    name: name
  }).unwrap();
}

  // console.log("res.success");
  //         console.log(res.success);
  //           console.log("otpWay");
  //         console.log(otpWay);
  //     res.success && otpWay == "Number" ? setOtpWay("NumberOtpSend") : setOtpWay("EmailOtpSend");

    } catch (error) {

if(error.data.message == "user already exists"){
  // toast.error("!این کاربر قبلا ثبت شده است");
  //  setSwitchMission("Login");
  //  setOtpWay("Number")
  loginAgain();
}else{
  toast.error("مشکلی رخ داده است دوباره تلاش نمایید و اینترنت خود را چک نمایید لطفا");
}
    }
  };

  const loginHandle = async () => {
    try {
      otpWay == "Number" ? setOtpWay("NumberOtpSend") : setOtpWay("EmailOtpSend");
      const interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
      const res =
        otpWay == "Number"
          ? await loginByPhone({ number: Number(p2e(phone)) }).unwrap()
          : await loginByEmail({ email: email }).unwrap();

      return () => clearInterval(interval);
      // res.success && otpWay == "Number" ? setOtpWay("NumberOtpSend") : setOtpWay("EmailOtpSend");
  
    } catch (error) {
      if(error.data.message=="I can't find this user sorry! call to support."){
    toast.error("شما ثبت نام نکردید لطفا ابتدا ثبت نام نمایید");
        setSwitchMission("Register");
        setOtpWay("Number");
        
      }else{
        toast.error(error.data.message);
      }
      
    }
  };


   const loginAgain = async () => {
    setSeconds(60)
    try {
      const res =await loginByPhone({ number: Number(p2e(phone)) }).unwrap();
      res.success &&  setOtpWay("NumberOtpSend") ;
      const interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    } catch (error) {
      toast.error(error.data.message);
    }
  };

  return (
    <div className=" relative top-0 left-0 z-50 w-full h-full flex items-center justify-center ">
          <div
      className={
        darkMode
          ? "w-screen fixed flex  z-50 flex-col items-center md:w-96   mt-auto mb-0 rounded-t-3xl border-3 border-lightBg border-opacity-30 my-2  md:mx-0 backdrop-blur rounded-2xl p-4 bg-darkBg bg-opacity-80 "
          : "w-screen fixed flex  z-50 flex-col items-center md:w-96   mt-auto mb-0 rounded-t-3xl bg-lightBg px-6 border-0 border-lightBg border-opacity-10 my-2 md:mx-0 backdrop-blur rounded-2xl  "
      }
    >
      <ToastContainer />

      {/* Header Register or Login */}
      <div className="w-full -mt-4 flex justify-end z-0">
        <span
          className={
            darkMode
              ? "text-darkTxtOne font-modamBl text-xl mt-auto mb-6 "
              : "text-lightTxtOne font-modamBl text-xl mt-auto mb-6 drop-shadow-xl"
          }
        >
          {persianLan
            ? switchMission == "Login"
              ? "ورود"
              : "ثبت نام"
            : switchMission == "Login"
            ? "Sign In"
            : "Sign Up"}
        </span>

        {switchMission == "Login" ? (
          <img
            src="/assets/imgs/icon/fingerprint.png"
            className=" h-20 ml-2 object-contain bg-transparent rounded-xl drop-shadow-xl "
          />
        ) : (
          <img
            src="/assets/imgs/icon/lockImg.png"
            className="h-24 ml-2 object-contain bg-transparent rounded-xl drop-shadow-xl "
          />
        )}

        <Button
          isIconOnly
          color="light"
          onClick={() => setModalMission({ ...modalMission, appear: false })}
          className="w-10 h-10  mt-auto mb-4"
        >
          <CloseBulkIcon Size={48} Fill={darkMode ? "#ad1037" : "#292D32"} />
        </Button>
      </div>


      {(otpWay == "Number" || otpWay == "Email") && (
        <>
          <div className="flex flex-col items-start gap-2"></div>

          {switchMission == "Register" && (
            <>
              <p
                className={
                  darkMode
                    ? "w-full  text-center mt-4  text-darkTxtOne font-modamBl"
                    : "w-full  text-center mt-4  text-lightTxtOne font-modamBl"
                }
              >
                {persianLan ? ":لطفا نام و نام خانوادگی خود را وارد نمایید" : "Please insert your Name:"}
              </p>
              <InputCustom
                Value={name}
                onChangeFrom={(e) => {
                  return setName(e.target.value);
                }}
              />
            </>
          )}
          <p
            className={
              darkMode
                ? "w-full  text-center mt-4  text-darkTxtOne font-modamBl"
                : "w-full  text-center mt-4  text-lightTxtOne font-modamBl"
            }
          >
            {otpWay == "Number"
              ? persianLan
                ? ":لطفا شماره موبایل خود را وارد نمایید"
                : "Please insert your Phone number:"
              : persianLan
              ? ":لطفا ایمیل خود را وارد نمایید"
              : "Please insert your Email:"}
          </p>

          <InputCustom
            Value={otpWay == "Number" ? phone : email}
            onChangeFrom={(e) => {
              return otpWay == "Number" ? setPhone(e.target.value) : setEmail(e.target.value);
            }}
          />
          <Button
            onPress={switchMission == "Register" ? registerHandle : loginHandle}
            color="danger"
            className="w-full py-6 mb-2 mt-4  font-modamBl hover:scale-102 text-lg"
            variant="shadow"
          >
            {persianLan ? "ارسال کد" : "Sent OTP"}
          </Button>
        </>
      )}

      {/*OTP lIVE DURATION */}
      {(otpWay == "NumberOtpSend" || otpWay == "EmailOtpSend") && (
        <>
          <div className="flex flex-row w-full  items-center justify-around">
            <div
              className={
                persianLan
                  ? "flex flex-row items-center justify-center"
                  : "flex flex-row-reverse items-center justify-center"
              }
            >
              <span
                className={darkMode ? "text-darkTxtOne font-modamR text-xs" : "text-lightTxtOne font-modamR text-xs"}
              >
                {persianLan ? "ثانیه دیگر دوباره می توانید ارسال نمایید" : "Seconds later send again"}
              </span>

              <span
                className={darkMode ? "text-darkTxtOne font-modamEng  px-2" : "text-lightTxtOne font-modamEng  px-2"}
              >
                {" "}
                {seconds>0?seconds:0}
              </span>

              <img
                src="/assets/imgs/icon/timer.png"
                className="w-20 object-contain bg-transparent rounded-xl drop-shadow-xl "
              />
            </div>
          </div>

          <InputOtp
            length={6}
            value={otp}
            onValueChange={setOtp}
            onComplete={otpSendHandle}
            className="font-modamBl  p-6 rounded-lg border-dashed"
            size="lg"
            variant={darkMode ? "flat" : "bordered"}
          />


           {(seconds <= 0) && (

                <Button
            onPress={ loginAgain}
            color="danger"
            className="w-full py-6 mb-2 mt-4 md:mt-16 font-modamBl hover:scale-102 text-lg"
            variant="shadow"
          >
            {persianLan ? "ارسال کد" : "Sent OTP"}
          </Button>
           )}

          <Button
            onPress={otpSendHandle}
            color="success"
            className="w-full py-8 mb-40 md:mb-20 mt-6 md:mt-16 font-modamBl hover:scale-102 text-lg"
            variant="shadow"
            isLoading={otpWay == "NumberOtpProcess" || otpWay == "EmailOtpProcess" ? true : false}
            spinner={
              <svg
                className="animate-spin h-5 w-5 text-current"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path
                  className="opacity-75"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  fill="currentColor"
                />
              </svg>
            }
          >
            {persianLan ? "ثبت" : "Sent OTP"}
          </Button>
        </>
      )}


      {(otpWay == "Number" || otpWay == "Email") && (
        <>
          {switchMission == "Login" && (
            <p className={"text-[#ad1037] text-sm text-center font-modamR p-2 "}>
              اگر حساب کاربری ندارید ابتدا ثبت نام نمایید
            </p>
          )}

          {switchMission == "Register" && (
            <p className={"text-[#ad1037] text-sm text-center font-modamR p-2"}>اگر حساب کاربری دارید لطفا وارد شوید</p>
          )}
        </>
      )}
      {/* Button Switch Register or Login */}

      {(seconds == 60) && (
        <Button
          color="danger"
          variant="flat"
          className="w-full py-6 mt-2 mb-32 text-lg"
          onPress={() => (switchMission == "Login" ? setSwitchMission("Register") : setSwitchMission("Login"))}
        >
          {switchMission == "Login" ? (persianLan ? "ثبت نام" : "Register") : persianLan ? "ورود به حساب" : "Login"}
        </Button>
      )}
    </div>
    </div>

  );
};

export default SignIoModal;
