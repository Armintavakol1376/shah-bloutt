"use client";
import React, { useState, useContext } from "react";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";
import CategoryBulkIcon from "../Icons/CategoryBulkIcon";
import { Button, Chip, Avatar } from "@nextui-org/react";
import TicketIcon from "../Icons/TicketIcon";
import { CheckIcon } from "../Icons/CheckIcon";
import CloseBulkIcon from "../Icons/CloseBulkIcon";
import ArrowBackIcon from "../Icons/ArrowBackIcon";
import ArrowLeftOutlineIcon from "../Icons/ArrowLeftOutlineIcon";
import DoubleCoffeeBeanIcon from "../Icons/DoubleCoffeeBeanIcon";
import AboutBulkIcon from "../Icons/AboutBulkIcon";
import CoffeBeansOutlineIcon from "../Icons/CoffeBeansOutlineIcon";
import CoffeBeanFillIcon from "../Icons/CoffeBeanFillIcon";
import EditBulkIcon from "../Icons/EditBulkIcon";

const QASections = () => {
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

  const [videoSelect, setVideoSelect] = useState(null);

  const qc1 = [
    {
      q: "فقط قهوه اسپرسو می خورم",
      answer: [
        {
          q: "تازگی قهوه اهمیت ندارد و مسئله فقط کرما است",
          answer: [
            {
              lastAnswer: "قهوه ساز مناسب نسپرسو",
              suggestTitle: ":پیــــــشنهاد",
              suggest: ["Sage", "Pixie"],
            },
          ],
        },
        {
          q: "به وسیله ای در مسافرت یا محل کار نیاز دارم",
          answer: [
            {
              lastAnswer: "کرما مهم است",
              suggestTitle: ":پیــــــشنهاد",
              suggest: ["نانو پرسو", "مینی پرسو"],
            },
            {
              lastAnswer: "کرما مهم نیست",
              suggestTitle: ":پیــــــشنهاد",
              suggest: ["موکاپات"],
            },
          ],
        },

        {
          q: "خودم می خواهم حس تهیه انواع نوشیدنی را داشته باشم",
          answer: [
            {
              lastAnswer: "محدودیت مالی ندارم",
              suggestTitle: ":پیــــــشنهاد",
              suggest: [
                "دستگاه های نیمه صنعتی با پرتا فیلتر ۵۸ میلی متری و استیم وند حرفه ای شناور در آب مثل : نوا ۱۲۸",
              ],
            },
            {
              lastAnswer: "محدودیت مالی دارم",
              suggestTitle: ":پیــــــشنهاد",
              suggest: [
                "اسپرسو ساز های معمولی با پرتا فیلتر ۵۱ میلی متری مثل مباشی و دلونگی و نوا",
              ],
            },
          ],
        },

        {
          q: "فرصت ندارم و فقط می خواهم قهوه خوبی بخورم",
          answer: [
            {
              lastAnswer: "محدودیت مالی ندارم",
              suggestTitle: ":پیــــــشنهاد",
              suggest: ["z10 اسپرسو ساز تمام اتومات جورا "],
            },
            {
              lastAnswer: "محدودیت مالی دارم",
              suggestTitle: ":پیــــــشنهاد",
              suggest: ["ECAM23.460.S اسپرسو ساز تمام اتومات دلونگی "],
            },
          ],
        },
      ],
    },
    {
      q: "نوع قهوه مهم نیست فقط کیفیت قهوه",
      answer: [
        {
          q: "با انواع روش های دم آوری آشنا هستم",
          answer: [
            {
              lastAnswer: "علاقمند به روش های نوین و فیلتری هستم",
              suggestTitle: ":پیــــــشنهاد",
              suggest: [
                "کـــــمکس",
                "V60",
                "ایـــــروپرس",
                "ســـــایفون",
                "کلــــــور",
              ],
            },
            {
              lastAnswer: "علاقمند به روش های کلاسیک هستم",
              suggestTitle: ":پیــــــشنهاد",
              suggest: ["ماشین های دمـــــی", "فــــرنچ پرس", "قهوه تـــــرک"],
            },
          ],
        },

        {
          q: "به مدل های دیگر دم آوری فکر نکرده ام",
          answer: [
            {
              lastAnswer: "قهوه ترک",
              suggestTitle:
                ":در این روش به یک جذوه نیاز دارید که قیمت ارزانی دارد و یک قهوه با کیفیت خواهید داشت",
              videoSuggest: ["/assets/videos/coffeeTechnicsVideos/turkish.mp4"],
            },
            {
              lastAnswer: "فرنچ پرس",
              suggestTitle:
                ":فرنچ پرس یک پارچ کوچک با یک فیلتر داخل آن است که می تواند قهوه عالی بدهد",
              videoSuggest: ["/assets/videos/coffeeTechnicsVideos/French.mp4"],
            },
            {
              lastAnswer: "ماشین دمی",
              suggestTitle:
                ":وسیله ای مانند اسپرسو ساز اما ساده تر از آن است که قهوه با آسیاب درشت تر باید در آن ریخت",
              videoSuggest: [
                "/assets/videos/coffeeTechnicsVideos/BrewingMachine.mp4",
              ],
            },
            {
              lastAnswer: "کمکس",
              suggestTitle:
                ":یک وسیله فیلتر دار به شکل ساعت شنی است که قهوه ای بی نظیر می دهد",
              videoSuggest: ["/assets/videos/coffeeTechnicsVideos/Chemex.mp4"],
            },
            {
              lastAnswer: "V60",
              suggestTitle:
                ":یک وسیله قیف شکل که فیلتر در آن قرار می گیردو زیر آن سوراخ است",
              videoSuggest: ["/assets/videos/coffeeTechnicsVideos/V60.mp4"],
            },
            {
              lastAnswer: "کلور",
              suggestTitle:
                ":وسیله ای مانند وی ۶۰  که زیر آن تا زمانی که روی لیوان قرار نگیرد باز نمی شود",
              videoSuggest: ["/assets/videos/coffeeTechnicsVideos/clever.mp4"],
            },
            {
              lastAnswer: "سایفون",
              suggestTitle:
                ":یک وسیله شیشه ای آلمانی که با حرارت چراغ زیرش عمل می کندو یکی از بهترین روش هاست",
              videoSuggest: ["/assets/videos/coffeeTechnicsVideos/Syphon.mp4"],
            },
            {
              lastAnswer: "ایروپرس",
              suggestTitle:
                ":ایروپرس یک ابزار دم آوری که توسط یک فیزیکدان به نام آلن آدلر اختراع شد و این وسیله با فشار دست کار می کند",
              videoSuggest: [
                "/assets/videos/coffeeTechnicsVideos/Aeropress.mp4",
              ],
            },
            {
              lastAnswer: "قهوه عربی",
              suggestTitle:
                ":یک قهوه اصیل و ادویه ای که در دله عربی تهیه و روش منصوب به اعراب ایران بسیار با کیفیت است",
              videoSuggest: ["/assets/videos/coffeeTechnicsVideos/arab.mp4"],
            },
            {
              lastAnswer: "کلد برو",
              suggestTitle:
                ":قهوه سرد دم برای دم آوری نیاز به زمانی بیش از نیمروز دارند و با یخ و آب صفر درجه تهیه می شود",
              videoSuggest: [
                "/assets/videos/coffeeTechnicsVideos/ColdBrew.mp4",
              ],
            },
          ],
        },
      ],
    },
  ];

  const [questions, setQuestions] = useState(qc1);
  const [answer, setAnswer] = useState(null);
  const [questionHistory, setQuestionHistory] = useState([]);

  return (
    <div className="w-full flex flex-col justify-center gap-2 pb-60">
      {/* bg-[#ffff] pt-2 rounded-xl overflow-x-scroll */}
      <div
        className={
          persianLan
            ? "w-full flex flex-row  justify-end p-0 mb-8"
            : "w-full flex flex-row  justify-start p-0 mb-8"
        }
      >
        <span
          className={
            persianLan
              ? darkMode
                ? "mx-2 mt-1 opacity-70 text-right text-darkTxtOne text-xl font-modamBl"
                : "mx-2 mt-1 opacity-70 text-right text-lightTxtOne text-xl font-modamBl"
              : darkMode
              ? "mx-2 mt-1 opacity-70 text-left text-darkTxtOne text-xl font-modamBl"
              : "mx-2 mt-1 opacity-70 text-left text-lightTxtOne text-xl font-modamBl"
          }
        >
          {persianLan
            ? "لطفا به سوالات زیر پاسخ دهید تا به انتخاب مناسب خود برسید"
            : ":"}
        </span>
        <CategoryBulkIcon Size={32} Fill={"#ad1037"} />
      </div>

      <div
        className={
          persianLan
            ? "w-full flex flex-row  justify-end "
            : "w-full flex flex-row  justify-start "
        }
      >
        <span
          className={
            persianLan
              ? darkMode
                ? "mx-2 opacity-70 text-right text-darkTxtOne"
                : "mx-2 opacity-70 text-right text-lightTxtOne"
              : darkMode
              ? "mx-2 opacity-70 text-left text-darkTxtOne "
              : "mx-2 opacity-70 text-left text-lightTxtOne"
          }
        >
          نکته مهـــــــــم : شاه بلــــــوط تجهیزات برای فروش ندارد و این صرفا
          راهنمایی است
        </span>
        <EditBulkIcon Size={16} Fill={"#ad1037"} />
      </div>

      {questions.map((item, index) => (
        <div className="w-full flex flex-col mt-4 items-end" key={index}>
          {index == 0 && questionHistory.length > 0 && (
            <div className="flex flex-row justify-center items-center mb-4">
              <span
                className={
                  persianLan
                    ? darkMode
                      ? "mx-2 opacity-70 text-right text-darkTxtOne font-modamR"
                      : "mx-2 opacity-70 text-right text-lightTxtOne  font-modamR"
                    : darkMode
                    ? "mx-2 opacity-70 text-left text-darkTxtOne  font-modamR"
                    : "mx-2 opacity-70 text-left text-lightTxtOne  font-modamR"
                }
              >
                بازگــــشت
              </span>
              <Button
                isIconOnly
                color="danger"
                variant={"faded"}
                className="font-modamR"
           onPress={() => {
                  if (questionHistory.length > 0) {
                    const last = questionHistory[questionHistory.length - 1];
                    setQuestions(last.questions);
                    setAnswer(last.answer);
                    setVideoSelect(null);
                    setQuestionHistory((prev) => prev.slice(0, -1));
                  }
                }}
              >
                <CloseBulkIcon Size={36} Fill={"#ad1037"} />
              </Button>
            </div>
          )}

          {!item.lastAnswer && (
            <Button
              color="success"
              variant={item.lastAnswer ? "light" : "faded"}
              className="font-modamR"
                  onPress={() => {
                setQuestionHistory((prev) => [
                  ...prev,
                  { questions, answer },
                ]);
                setAnswer(item.q);
                setQuestions(item.answer);
              }}
              endContent={answer == item.q ? <CheckIcon /> : null}
            >
              {item.q}
            </Button>
          )}

          {item.lastAnswer && (
            <div className="flex flex-col gap-2 w-full text-right items-end mt-4">
              <span
                className={
                  persianLan
                    ? darkMode
                      ? "mx-2 mt-1 opacity-70 text-right text-darkTxtOne text-xl font-modamBo"
                      : "mx-2 mt-1 opacity-70 text-right text-lightTxtOne text-xl font-modamBo"
                    : darkMode
                    ? "mx-2 mt-1 opacity-70 text-left text-darkTxtOne text-xl font-modamBo"
                    : "mx-2 mt-1 opacity-70 text-left text-lightTxtOne text-xl font-modamBo"
                }
              >
                {":" + item.lastAnswer}
              </span>

              <span
                className={
                  persianLan
                    ? darkMode
                      ? "mx-2 mt-1 opacity-70 text-right text-darkTxtOne font-modamR"
                      : "mx-2 mt-1 opacity-70 text-right text-lightTxtOne  font-modamR"
                    : darkMode
                    ? "mx-2 mt-1 opacity-70 text-left text-darkTxtOne  font-modamR"
                    : "mx-2 mt-1 opacity-70 text-left text-lightTxtOne  font-modamR"
                }
              >
                {item.suggestTitle}
              </span>

              {item.suggest?.map((item, index) => (
                <Chip
                  key={index}
                  startContent={<CheckIcon />}
                  variant="faded"
                  color="success"
                  className="text-lg p-4"
                >
                  {item}
                </Chip>
              ))}

              {item.videoSuggest?.map((itemS, indexS) => (
                <>
                  {videoSelect == itemS ? (
                    <>
                      <Button
                        color="danger"
                        variant={"faded"}
                        className="font-modamR mt-4"
                        onPress={() => setVideoSelect(null)}
                      >
                        بستن
                        <CloseBulkIcon Size={36} Fill={"#ad1037"} />
                      </Button>
                      <video
                        key={indexS}
                        width="90%"
                        controls
                        autoPlay
                        loop
                        className="rounded-xl m-10"
                      >
                        <source src={itemS} type="video/mp4" />
                      </video>
                    </>
                  ) : (
                    <Button
                      color="success"
                      variant="faded"
                      onPress={() => setVideoSelect(itemS)}
                    >
                      نمایش ویـــــــدیو
                      {/* <ArrowLeftOutlineIcon Size={36} Fill={"#ad1037"} /> */}
                      <DoubleCoffeeBeanIcon Size={12} Fill={"#ad1037"} />
                    </Button>
                  )}
                </>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QASections;
