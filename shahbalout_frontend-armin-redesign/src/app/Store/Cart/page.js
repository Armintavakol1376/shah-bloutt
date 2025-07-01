"use client";
import React, { useContext, useState, useEffect } from "react";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";
import { useRouter } from "next/navigation";
import ScreenWrapper from "@/app/Components/Global/ScreenWrapper";
import ScreenContainer from "@/app/Components/Global/ScreenContainer";
import NaviBottom from "@/app/Components/Global/NaviBottom";
import NaviTab from "@/app/Components/Global/NaviTab";
import TransitionEffect1 from "@/app/Components/Global/TransitionEffect1";
import { useSelector, useDispatch } from "react-redux";
import { Button, Checkbox } from "@nextui-org/react";
import CartItemCard from "@/app/Components/PageShopComponents/CartOrderSpecComponents/CartItemCard";
import InputCustom from "@/app/Components/Global/InputCustom";
import PriceSlicer from "@/app/Components/Global/PriceSlicer";
import Link from "next/link";
import EpicModal from "@/app/Components/Global/Modals/EpicModal";
import { useCreateOrderMutation } from "@/app/ReduxState/Slices/orderApiSlice";
import Loading from "@/app/Components/Global/Loading";
import IsErroring from "@/app/Components/Global/IsErroring";
import { clearCartItems } from "@/app/ReduxState/Slices/cartSlice";
import { BASEURL } from "@/app/ReduxState/BaseUrl";
import { useUpdateProfileMutation } from "@/app/ReduxState/Slices/userApiSlice";
import { setCredentials } from "@/app/ReduxState/Slices/authSlice";


const page = () => {
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

  const [isClient, setIsClient] = useState(false);
  const [updateProfile, { isSuccess, isError, error, data, reset }] =
    useUpdateProfileMutation();
  useEffect(() => {
    setIsClient(true);
  }, []);

  const dispatch = useDispatch();
  const router = useRouter();

  const [createOrder, { isLoading, result }] = useCreateOrderMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const cart = useSelector((state) => state.cart);

  const [orderMethod, setOrderMethod] = useState({
    paymentMethod: "پرداخت کارت به کارت",
    deliveryMethod: "Post",
    totalPrice: 0,
  });

  const [shippingAddress, setShippingAddress] = useState("");

  const [zipCode, setZipCode] = useState('');

  const [ordError, setOrdError] = useState(false);


useEffect(() => {
  if (userInfo?.user?.address) {
    setShippingAddress(userInfo.user.address);
  }
  if (userInfo?.user?.zipCode) {
    setZipCode(userInfo.user.zipCode);
  }
}, []);

  const updateProfileHandle = async (profile) => {
      try {
        // console.log("profile:", profile);
        const res = await updateProfile({ profile: profile }).unwrap();
        res.success && dispatch(setCredentials({ ...res }));
      } catch (error) {
        console.log("updateerror:", error);
      }
    };

  const createOrderHandle = async () => {

   const profile = {
    name: userInfo?.user?.name,
    number: userInfo?.user?.numberVerify? userInfo.user.number : 0,
    address: shippingAddress,
    zipCode: zipCode,
    avatar: null,
    nickname: null,
    email: userInfo?.user?.emailVerify? userInfo.user.email : "",
    aboutme: null,
  }

console.log("profile:", "1")
    await updateProfileHandle(profile);
    //console.log("orderItems: ", cart.cartItems);
    !userInfo?.user &&
      setModalMission({
        ...modalMission,
        appear: true,
        mission: "Login",
      });
console.log("profile:", "2")
    try {
      const res = await createOrder({
        orderItems: cart.cartItems,
        shippingAddress: shippingAddress,
        zipCode: zipCode,
        paymentMethod: "درگاه پرداخت",
        deliveryMethod: orderMethod.deliveryMethod,
      }).unwrap();
console.log("profile:", "3")
      console.log("ressss: ", res)

      res.success &&
        setModalMission({
          ...modalMission,
          appear: true,
          mission: "SuccessOrder",
          id: res.order._id
        }),
        dispatch(clearCartItems());
        res.success && router.push(`${BASEURL}/Pay/PaymentRequest?id=${res.order._id}`)
    } catch (error) {
      setOrdError(error);
    }
  };

  useEffect(() => {
  if (userInfo?.user?.address) {
    setShippingAddress(userInfo.user.address);
  }

  if (cart?.cartItems) {
    const total = cart.cartItems.reduce(
      (acc, item) => acc + Number(item.price) * Number(item.qty),
      0
    );

    setOrderMethod((prev) => ({
      ...prev,
      totalPrice: total,
    }));
  }
}, [cart.cartItems, userInfo?.user?.address]);

  
  return (
    <ScreenWrapper>
      <NaviTab activeLink={"Cart"} Logo />
      <TransitionEffect1>
        {isClient && !userInfo?.user?.name && (
          <div className="w-full flex flex-col items-center justify-center">
            <span
              className={
                darkMode
                  ? "font-modamBo text-darkTxtTwo w-full my-8 text-center px-10"
                  : "font-modamBo text-lightTxtTwo w-full my-8 text-center px-10"
              }
            >
              {persianLan
                ? "اگر برای بار اول از سایت ما خرید می نمایید لطفا با وارد کردن شماره تماس ثبت نام نمایید و یا  لطفا وارد اکانت خود شوید"
                : "You should be login/signup first! please go to your profile"}
            </span>
            <Button
              color="danger"
              variant="ghost"
              className="mx-auto h-16 "
              onPress={() =>
                setModalMission({
                  ...modalMission,
                  appear: true,
                  mission: "Register",
                })
              }
            >
              <h4
                className={
                  darkMode
                    ? "font-modamBo text-lg text-darkTxtTwo mx-1"
                    : "font-modamBo text-lg text-lightTxtTwo mx-1"
                }
              >
                {persianLan ? "ثبت نام/ ورود" : "Login / Register"}
              </h4>
            </Button>
          </div>
        )}
        {isClient &&   cart?.cartItems && cart.cartItems.length > 0 ? (
        userInfo?.user?.name &&  <ScreenContainer>
            <div className="w-full flex flex-col items-center">
              {cart.cartItems.map((item, index = 0) => (
                <CartItemCard Item={item} key={index} />
              ))}
            </div>

            <div
              className={
                darkMode
                  ? "w-full flex flex-col items-center p-4 border-[#f1f1f1] rounded-lg my-4"
                  : "w-full flex flex-col items-center p-4 border-[#7e7e7e] rounded-lg my-4"
              }
            >
              <p
                className={
                  darkMode
                    ? "font-modamBo text-darkTxtTwo"
                    : "font-modamBo text-lightTxtTwo"
                }
              >
                {persianLan ? ": روش ارسال" : "Delivery Method:"}
              </p>

              <Button
                color="warning"
                variant={
                  orderMethod.deliveryMethod == "Post" ? "solid" : "bordered"
                }
                className="font-modamR m-2"
                onPress={() =>
                  setOrderMethod({ ...orderMethod, deliveryMethod: "Post" })
                }
              >
                {persianLan
                  ? "  پست (ارسال بین 2 تا 4 روز کاری - هزینه: 70,000 تومان)"
                  : "Post of Iran (only for Iranian customer)"}
              </Button>

              <Button
                color="warning"
                variant={
                  orderMethod.deliveryMethod == "Shiraz Delivery"
                    ? "solid"
                    : "bordered"
                }
                className="font-modamR m-2 text-sm"
                onPress={() =>
                  setOrderMethod({
                    ...orderMethod,
                    deliveryMethod: "Shiraz Delivery",
                  })
                }
              >
                {persianLan
                  ? "تحویل با پیک (ارسال در همان روز ویژه شیراز - پس کرایه)"
                  : "(only for Iranian customer)"}
              </Button>
            </div>

            <div
              className={
                darkMode
                  ? "w-full flex flex-col items-center p-4 border border-[#f1f1f1] border-dashed rounded-lg my-4"
                  : "w-full flex flex-col items-center p-4 border border-[#7e7e7e] border-dashed rounded-lg my-4"
              }
            >
              <p
                className={
                  darkMode
                    ? "font-modamBo text-darkTxtTwo"
                    : "font-modamBo text-lightTxtTwo"
                }
              >
                {persianLan ? ": آدرس شما" : " Addrerss:"}
              </p>

              <div
                className={
                  darkMode
                    ? "w-full flex flex-col items-center p-1  rounded-lg my-4 cursor-grabbing"
                    : "w-full flex flex-col items-center p-1   rounded-lg my-4 cursor-grabbing"
                }
                onClick={() => setShippingAddress(userInfo?.user?.address)}
              >
                <div
                  className={
                    persianLan
                      ? "w-full flex flex-row-reverse items-center"
                      : "w-full flex flex-row items-center"
                  }
                >
                  <Checkbox
                    isSelected={
                       shippingAddress!=""
                        ? true
                        : false
                    }
                    onValueChange={() =>

                      (shippingAddress!=userInfo?.user?.address)? setShippingAddress(userInfo?.user?.address): setShippingAddress("")

                  
                    }
                    color="success"
                    size="lg"
                  ></Checkbox>
                  <span
                    className={
                      darkMode
                        ? persianLan
                          ? "font-modamR text-sm text-darkTxtTwo text-right w-11/12 mx-1"
                          : "font-modamR text-sm text-darkTxtTwo text-left w-11/12 mx-1"
                        : persianLan
                        ? "font-modamR text-sm text-lightTxtTwo text-right w-11/12 mx-1"
                        : "font-modamR text-sm text-lightTxtTwo text-left w-11/12 mx-1"
                    }
                    onClick={() => setShippingAddress(userInfo?.user?.address)}
                  >
                    {isClient && userInfo?.user?.address}
                   
                  </span>
                </div>
              </div>

              <InputCustom
                TxtArea={true}
                Title={null}
                Value={shippingAddress}
                PlaceHolder={
                  persianLan ? "حداقل ۳ کلمه" : "insert your address please"
                }
                AutoComplete={"address"}
                onChangeFrom={(e) => {
                  return setShippingAddress(e.target.value);
                }}
              />

<span
                    className={
                      darkMode
                        ? persianLan
                          ? "font-modamR text-sm text-darkTxtTwo text-right w-full mx-1"
                          : "font-modamR text-sm text-darkTxtTwo text-left w-full mx-1"
                        : persianLan
                        ? "font-modamR text-sm text-lightTxtTwo text-right w-full mx-1"
                        : "font-modamR text-sm text-lightTxtTwo text-left w-full mx-1"
                    }
                    onClick={() => setZipCode(userInfo?.user?.zipCode)}
                  >
          :(دقیقا ۱۰ رقم) کد پستی 
                  </span>

{userInfo?.user?.zipCode && <>
                  <span
                    className={
                      darkMode
                        ? persianLan
                          ? "font-modamR text-sm text-darkTxtTwo text-right w-full mx-1 mt-4"
                          : "font-modamR text-sm text-darkTxtTwo text-left w-full mx-1 mt-4"
                        : persianLan
                        ? "font-modamR text-sm text-lightTxtTwo text-right w-full mx-1 mt-4"
                        : "font-modamR text-sm text-lightTxtTwo text-left w-full mx-1 mt-4"
                    }
                    
                  >
                  :  انتخاب این کد پستی
                  </span>
<div className=" inline-flex justify-end w-full mt-5 ">

                 <span
                    className={
                      darkMode
                        ? persianLan
                          ? "font-modamR text-sm text-darkTxtTwo text-right w-full mx-1"
                          : "font-modamR text-sm text-darkTxtTwo text-left w-full mx-1"
                        : persianLan
                        ? "font-modamR text-sm text-lightTxtTwo text-right w-full mx-1"
                        : "font-modamR text-sm text-lightTxtTwo text-left w-full mx-1"
                    }
                    onClick={() => setZipCode(userInfo?.user?.zipCode)}
                  >
  { isClient &&  userInfo?.user?.zipCode}  
                  </span>
                  <Checkbox
                    isSelected={
                      zipCode ==  userInfo?.user?.zipCode
                        ? true
                        : false
                    }
                    onValueChange={() =>
(zipCode!=userInfo?.user?.zipCode)? setZipCode(userInfo?.user?.zipCode): setZipCode("")

                     
                    }
                    color="success"
                    size="lg"
                    className=""
                  >

     
                  </Checkbox>

   
</div>
                  </>

}

              <InputCustom
                Value={zipCode}
                Type={Number}
                onChangeFrom={(e) => {
                  return setZipCode(e.target.value);
                }}
              />
            </div>

            {/* <div
                            className={
                                darkMode
                                    ? 'w-full flex flex-col items-center p-4 border border-[#f1f1f1] border-dashed rounded-lg my-4'
                                    : 'w-full flex flex-col items-center p-4 border border-[#7e7e7e] border-dashed rounded-lg my-4'
                            }
                        >
                            <p
                                className={
                                    darkMode
                                        ? 'font-modamBo text-darkTxtTwo'
                                        : 'font-modamBo text-lightTxtTwo'
                                }
                            >
                                {persianLan ? ': روش پرداخت' : 'Peyment Method:'}
                            </p>
                            <Button
                                isDisabled
                                color="warning"
                                className="font-modamR m-2"
                                variant={
                                    orderMethod.paymentMethod == 'Shepa' ? 'solid' : 'bordered'
                                }
                                onPress={() =>
                                    setOrderMethod({
                                        ...orderMethod,
                                        paymentMethod: 'Shepa',
                                    })
                                }
                            >
                                {persianLan
                                    ? ' (به زودی...) درگاه پرداخت '
                                    : 'Shepa peyment gateway(only for Iranian customer'}
                            </Button>

                            {persianLan && (
                                <>
                                    <Button
                                        color="warning"
                                        className="font-modamR m-2"
                                        variant={
                                            orderMethod.paymentMethod == 'پرداخت کارت به کارت'
                                                ? 'solid'
                                                : 'bordered'
                                        }
                                        onPress={() =>
                                            setOrderMethod({
                                                ...orderMethod,
                                                paymentMethod: 'پرداخت کارت به کارت',
                                            })
                                        }
                                    >
                                        کارت به کارت
                                    </Button>
                                    <span
                                        className={
                                            darkMode
                                                ? 'font-modamBo  text-darkTxtTwo mx-1'
                                                : 'font-modamBo  text-lightTxtTwo mx-1'
                                        }
                                    >
                                        پس از ثبت سفارش لطفا کارت به کارت نمایید و ادمین پرداخت شما
                                        را بررسی و سفارش را ارسال می نماید
                                    </span>
                                </>
                            )}
                        </div> */}
            <div
              className={
                darkMode
                  ? "w-full flex flex-col items-center p-4 border border-[#f1f1f1] border-dashed rounded-lg my-4 mb-32"
                  : "w-full flex flex-col items-center p-4 border border-[#7e7e7e] border-dashed rounded-lg my-4 mb-32"
              }
            >
              <div
                className={
                  persianLan
                    ? "flex flex-row-reverse items-center"
                    : "flex flex-row items-center"
                }
              >
                <p
                  className={
                    darkMode
                      ? "font-modamBo text-lg text-darkTxtTwo mx-2"
                      : "font-modamBo text-lg text-lightTxtTwo mx-2"
                  }
                >
                  {persianLan ? ":مبلغ سفارش" : "Order Price:"}
                </p>

                <p className={"font-modamBl text-xl text-[#2aad10]"}>
                  {orderMethod.totalPrice.toLocaleString()}
                </p>
                <span className={"font-modamEl  text-[#2aad10] mx-1"}>تومان</span>
              </div>

              <div
                className={
                  persianLan
                    ? "flex flex-row-reverse items-center"
                    : "flex flex-row items-center"
                }
              >
                <p
                  className={
                    darkMode
                      ? "font-modamBo text-lg text-darkTxtTwo mx-2"
                      : "font-modamBo text-lg text-lightTxtTwo mx-2"
                  }
                >
                  {persianLan ? ":هزینه ارسال" : "Delivery Price:"}
                </p>

                {orderMethod.deliveryMethod == "Shiraz Delivery" ? (
                  <p className={"font-modamEl text-sm text-[#2aad10]"}>
                    هزینه پس کرایه می باشد!
                  </p>
                ) : (
                  <>
                    <p className={"font-modamBl text-xl text-[#2aad10]"}>
                      {PriceSlicer(70000)}
                    </p>
                    <span className={"font-modamEl  text-[#2aad10] mx-1"}>
                      تومان
                    </span>
                  </>
                )}
              </div>

              {ordError && shippingAddress.length < 10 ? (
                <IsErroring
                  Ttl={
                    persianLan
                      ? "لطفا آدرس خود را وارد نمایید"
                      : "Please enter your address"
                  }
                />
              ) : (
                ordError && <IsErroring />
              )}

              <p
                className={
                  darkMode
                    ? "font-modamR text-sm text-darkTxtTwo mx-1 text-right mt-2"
                    : "font-modamR text-sm text-lightTxtTwo mx-1 text-right mt-2"
                }
              >
                {persianLan
                  ? "به مبلغ فوق در زمان پرداخت از طریق درگاه پرداخت میزان اندکی مالیات بر ارزش افزوده از سمت بانک اضافه می گردد"
                  : null}
              </p>

              {isLoading ? (
                <Loading />
              ) : (
                zipCode.length > 9 &&
                shippingAddress.length > 10 ? (
                  <Button
                    color="success"
                    className="w-full m-4 font-modamBl"
                    onPress={createOrderHandle}
                  >
                    {persianLan ? "ایجاد سفارش" : "Create Order"}
                  </Button>        
                ) :  <Button
                color="success"
                className="w-full m-4 font-modamBl"
               isDisabled
              >
                {persianLan ? "ایجاد سفارش" : "Create Order"}
              </Button>
              )}
            </div>
          </ScreenContainer>
        ) : (
          <ScreenContainer>
            <div className="flex flex-col mt-10 mb-32 items-center ">
              <img
                className="w-32 animate-pulse"
                src="/assets/imgs/emptyCart.png "
              />

              <h1
                className={
                  darkMode
                    ? "font-modamBl text-lg text-darkTxtTwo mx-1"
                    : "font-modamBl text-lg text-lightTxtTwo mx-1"
                }
              >
                {persianLan
                  ? ".سبد خرید شما خالی میباشد"
                  : "Your Cart is Empty."}
              </h1>

              <Button   onPress={() => router.push('/Store')} color="warning" variant="ghost" className="mt-8 h-16">
                <img
                  className="w-12 h-12 my-2 animate-pulse"
                  src="/assets/imgs/coffeeStore.png "
                />
           
                  <h4
                    className={
                      darkMode
                        ? "font-modamL text-lg text-darkTxtTwo mx-1"
                        : "font-modamL text-lg text-lightTxtTwo mx-1"
                    }
                  >
                    {persianLan ? "رفتن به فروشگاه" : "Go to store..."}
                  </h4>
             
              </Button>
            </div>
          </ScreenContainer>
        )}
      </TransitionEffect1>
      {modalMission && <EpicModal />}
      <NaviBottom activeLink={"Store"} />
    </ScreenWrapper>
  );
};

export default page;
