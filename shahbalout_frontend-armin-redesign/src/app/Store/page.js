import React from "react";
import Image from "next/image";
import ScreenWrapper from "../Components/Global/ScreenWrapper";
import ScreenContainer from "../Components/Global/ScreenContainer";
import NaviTab from "../Components/Global/NaviTab";
import NaviBottom from "../Components/Global/NaviBottom";
import ShopCategoryMain from "../Components/PageShopComponents/ShopCategoryMain";
import TransitionEffect1 from "../Components/Global/TransitionEffect1";
import Head from "next/head";
import MainSwitcher from "../Components/PageShopComponents/MainSwitcher";

export const metadata = {
  title:
    "coffee, online coffee shop,Traditional Iranian coffee,Organic Iranian coffee,Fair trade Iranian coffee,Specialty Iranian coffee,Iranian coffee with saffron,Iranian coffee with cardamom,Iranian coffee with rosewater,Iranian coffee with pistachio,Iranian coffee with almond,Iranian coffee from Tehran,Iranian coffee from Shiraz,Iranian coffee from Isfahan,Iranian coffee from Tabriz,Iranian coffee from Mashhad,Iranian coffee gifts ,Iranian coffee subscription,Iranian coffee brewing guide,Iranian coffee history,Iranian coffee culture,Iranian coffee,Persian coffee,Iranian coffee beans,Persian coffee beans,Iranian coffee shop online,Persian coffee shop online,Buy Iranian coffee online, Buy Persian coffee online, Iranian coffee export,Persian coffee export,coffee beans, coffee shop in Leipzig, Shahbalout Coffee , شاه بلوط قهوه , خرید قهوه شاه بلوط , قهوه تخصصی شاه بلوط , قهوه آلی شاه بلوط, دانه قهوه شاه بلوط, قهوه اسپرسو شاه بلوط, قهوه فیلتر شاه بلوط, قهوه ترک شاه بلوط,   بهترین قهوه شاه بلوط, قیمت قهوه شاه بلوط, خرید آنلاین قهوه شاه بلوط, قهوه شاه بلوط لایپزیگ, دانه قهوه تازه شاه بلوط, قهوه شاه بلوط ارگانیک, هدیه قهوه شاه بلوط, آموزش دم آوری قهوه شاه بلوط,  قهوه عربیکا, قهوه روبوستا, قهوه تک خاستگاه, قهوه ترکیب, قهوه بدون کافئین, قهوه سرد, قهوه نیترژن, قهوه فرانسه, قهوه ایتالیایی,  قهوه شیراز,  قهوه فروشی شیراز,  خرید قهوه در شیراز, بهترین قهوه شیراز,  طعم قهوه , عطر قهوه,کیفیت قهوه, بسته بندی قهوه, ارسال قهوه, پرداخت آنلاین قهوه, تخفیف قهوه, هدیه قهوه",
  description:
    "coffee, online coffee shop,Traditional Iranian coffee,Organic Iranian coffee,Fair trade Iranian coffee,Specialty Iranian coffee,Iranian coffee with saffron,Iranian coffee with cardamom,Iranian coffee with rosewater,Iranian coffee with pistachio,Iranian coffee with almond,Iranian coffee from Tehran,Iranian coffee from Shiraz,Iranian coffee from Isfahan,Iranian coffee from Tabriz,Iranian coffee from Mashhad,Iranian coffee gifts ,Iranian coffee subscription,Iranian coffee brewing guide,Iranian coffee history,Iranian coffee culture,Iranian coffee,Persian coffee,Iranian coffee beans,Persian coffee beans,Iranian coffee shop online,Persian coffee shop online,Buy Iranian coffee online, Buy Persian coffee online, Iranian coffee export,Persian coffee export,coffee beans, coffee shop in Leipzig, Shahbalout Coffee , شاه بلوط قهوه , خرید قهوه شاه بلوط , قهوه تخصصی شاه بلوط , قهوه آلی شاه بلوط, دانه قهوه شاه بلوط, قهوه اسپرسو شاه بلوط, قهوه فیلتر شاه بلوط, قهوه ترک شاه بلوط,   بهترین قهوه شاه بلوط, قیمت قهوه شاه بلوط, خرید آنلاین قهوه شاه بلوط, قهوه شاه بلوط لایپزیگ, دانه قهوه تازه شاه بلوط, قهوه شاه بلوط ارگانیک, هدیه قهوه شاه بلوط, آموزش دم آوری قهوه شاه بلوط,  قهوه عربیکا, قهوه روبوستا, قهوه تک خاستگاه, قهوه ترکیب, قهوه بدون کافئین, قهوه سرد, قهوه نیترژن, قهوه فرانسه, قهوه ایتالیایی,  قهوه شیراز,  قهوه فروشی شیراز,  خرید قهوه در شیراز, بهترین قهوه شیراز,  طعم قهوه , عطر قهوه,کیفیت قهوه, بسته بندی قهوه, ارسال قهوه, پرداخت آنلاین قهوه, تخفیف قهوه, هدیه قهوه",
  keywords:
    "coffee, online coffee shop,Traditional Iranian coffee,Organic Iranian coffee,Fair trade Iranian coffee,Specialty Iranian coffee,Iranian coffee with saffron,Iranian coffee with cardamom,Iranian coffee with rosewater,Iranian coffee with pistachio,Iranian coffee with almond,Iranian coffee from Tehran,Iranian coffee from Shiraz,Iranian coffee from Isfahan,Iranian coffee from Tabriz,Iranian coffee from Mashhad,Iranian coffee gifts ,Iranian coffee subscription,Iranian coffee brewing guide,Iranian coffee history,Iranian coffee culture,Iranian coffee,Persian coffee,Iranian coffee beans,Persian coffee beans,Iranian coffee shop online,Persian coffee shop online,Buy Iranian coffee online, Buy Persian coffee online, Iranian coffee export,Persian coffee export,coffee beans, coffee shop in Leipzig, Shahbalout Coffee , شاه بلوط قهوه , خرید قهوه شاه بلوط , قهوه تخصصی شاه بلوط , قهوه آلی شاه بلوط, دانه قهوه شاه بلوط, قهوه اسپرسو شاه بلوط, قهوه فیلتر شاه بلوط, قهوه ترک شاه بلوط,   بهترین قهوه شاه بلوط, قیمت قهوه شاه بلوط, خرید آنلاین قهوه شاه بلوط, قهوه شاه بلوط لایپزیگ, دانه قهوه تازه شاه بلوط, قهوه شاه بلوط ارگانیک, هدیه قهوه شاه بلوط, آموزش دم آوری قهوه شاه بلوط,  قهوه عربیکا, قهوه روبوستا, قهوه تک خاستگاه, قهوه ترکیب, قهوه بدون کافئین, قهوه سرد, قهوه نیترژن, قهوه فرانسه, قهوه ایتالیایی,  قهوه شیراز,  قهوه فروشی شیراز,  خرید قهوه در شیراز, بهترین قهوه شیراز,  طعم قهوه , عطر قهوه,کیفیت قهوه, بسته بندی قهوه, ارسال قهوه, پرداخت آنلاین قهوه, تخفیف قهوه, هدیه قهوه",
};

const page = () => {
  return (
    <ScreenWrapper>
      <Head>
        <title>
          دانه‌های قهوه: تازه برشته‌شده، برای بهترین طعم قهوه اسپرسو: قوی و
          پر‌طعم قهوه فیلتر: لطیف و آرام‌بخش قهوه ترک: سنتی و اصیل
        </title>
      </Head>
      <NaviTab activeLink={"Store"} />
      <ScreenContainer>
        <MainSwitcher />
      </ScreenContainer>
      <NaviBottom activeLink={"Store"} />
    </ScreenWrapper>
  );
};

export default page;
