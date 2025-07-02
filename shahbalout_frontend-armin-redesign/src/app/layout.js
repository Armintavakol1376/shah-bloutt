import "./globals.css";
import localFont from "@next/font/local";
import { Inter } from "next/font/google";
import AppProviders from "./AppProviders";
const inter = Inter({ subsets: ["latin"] });

const thin = localFont({
  src: [
    {
      path: "../../public/assets/fonts/IRANSansWeb(FaNum)_UltraLight.ttf",
      style: "Thin",
    },
  ],
  variable: "--font-thin",
});

const black = localFont({
  src: [
    {
      path: "../../public/assets/fonts/IRANSansWeb(FaNum)_Black.ttf",
      style: "Black",
    },
  ],
  variable: "--font-black",
});

const peydablack = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Peyda-Black.ttf",
      style: "Black",
    },
  ],
  variable: "--font-peydablack",
});

const modamEL = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Modam/ModamFaNum-ExtraLight.ttf",
      style: "ExtraLight",
    },
  ],
  variable: "--font-modamEL",
});

const modamL = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Modam/ModamFaNum-Light.ttf",
      style: "Light",
    },
  ],
  variable: "--font-modamL",
});

const modamR = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Modam/ModamFaNum-Regular.ttf",
      style: "Regular",
    },
  ],
  variable: "--font-modamR",
});

const modamM = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Modam/ModamFaNum-Medium.ttf",
      style: "Medium",
    },
  ],
  variable: "--font-modamM",
});

const modamBo = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Modam/ModamFaNum-Bold.ttf",
      style: "Bold",
    },
  ],
  variable: "--font-modamBo",
});

const modamBl = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Modam/ModamFaNum-Black.ttf",
      style: "Black",
    },
  ],
  variable: "--font-modamBl",
});
const modamEng = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Modam/modamEng.ttf",
      style: "Regular",
    },
  ],
  variable: "--font-modamEng",
});

export const metadata = {
  title:
    "Shahbalout Coffee |   شــاه بلــــــــوط  | coffee, online coffee shop,Traditional Iranian coffee,Organic Iranian coffee,Fair trade Iranian coffee,Specialty Iranian coffee,Iranian coffee with saffron,Iranian coffee with cardamom,Iranian coffee with rosewater,Iranian coffee with pistachio,Iranian coffee with almond,Iranian coffee from Tehran,Iranian coffee from Shiraz,Iranian coffee from Isfahan,Iranian coffee from Tabriz,Iranian coffee from Mashhad,Iranian coffee gifts ,Iranian coffee subscription,Iranian coffee brewing guide,Iranian coffee history,Iranian coffee culture,Iranian coffee,Persian coffee,Iranian coffee beans,Persian coffee beans,Iranian coffee shop online,Persian coffee shop online,Buy Iranian coffee online, Buy Persian coffee online, Iranian coffee export,Persian coffee export,coffee beans, coffee shop in Leipzig, Shahbalout Coffee , شاه بلوط قهوه , خرید قهوه شاه بلوط , قهوه تخصصی شاه بلوط , قهوه آلی شاه بلوط, دانه قهوه شاه بلوط, قهوه اسپرسو شاه بلوط, قهوه فیلتر شاه بلوط, قهوه ترک شاه بلوط,   بهترین قهوه شاه بلوط, قیمت قهوه شاه بلوط, خرید آنلاین قهوه شاه بلوط, قهوه شاه بلوط لایپزیگ, دانه قهوه تازه شاه بلوط, قهوه شاه بلوط ارگانیک, هدیه قهوه شاه بلوط, آموزش دم آوری قهوه شاه بلوط,  قهوه عربیکا, قهوه روبوستا, قهوه تک خاستگاه, قهوه ترکیب, قهوه بدون کافئین, قهوه سرد, قهوه نیترژن, قهوه فرانسه, قهوه ایتالیایی,  قهوه شیراز,  قهوه فروشی شیراز,  خرید قهوه در شیراز, بهترین قهوه شیراز,  طعم قهوه , عطر قهوه,کیفیت قهوه, بسته بندی قهوه, ارسال قهوه, پرداخت آنلاین قهوه, تخفیف قهوه, هدیه قهوه",
  description:
    "coffee, online coffee shop,Traditional Iranian coffee,Organic Iranian coffee,Fair trade Iranian coffee,Specialty Iranian coffee,Iranian coffee with saffron,Iranian coffee with cardamom,Iranian coffee with rosewater,Iranian coffee with pistachio,Iranian coffee with almond,Iranian coffee from Tehran,Iranian coffee from Shiraz,Iranian coffee from Isfahan,Iranian coffee from Tabriz,Iranian coffee from Mashhad,Iranian coffee gifts ,Iranian coffee subscription,Iranian coffee brewing guide,Iranian coffee history,Iranian coffee culture,Iranian coffee,Persian coffee,Iranian coffee beans,Persian coffee beans,Iranian coffee shop online,Persian coffee shop online,Buy Iranian coffee online, Buy Persian coffee online, Iranian coffee export,Persian coffee export,coffee beans, coffee shop in Leipzig, Shahbalout Coffee , شاه بلوط قهوه , خرید قهوه شاه بلوط , قهوه تخصصی شاه بلوط , قهوه آلی شاه بلوط, دانه قهوه شاه بلوط, قهوه اسپرسو شاه بلوط, قهوه فیلتر شاه بلوط, قهوه ترک شاه بلوط,   بهترین قهوه شاه بلوط, قیمت قهوه شاه بلوط, خرید آنلاین قهوه شاه بلوط, قهوه شاه بلوط لایپزیگ, دانه قهوه تازه شاه بلوط, قهوه شاه بلوط ارگانیک, هدیه قهوه شاه بلوط, آموزش دم آوری قهوه شاه بلوط,  قهوه عربیکا, قهوه روبوستا, قهوه تک خاستگاه, قهوه ترکیب, قهوه بدون کافئین, قهوه سرد, قهوه نیترژن, قهوه فرانسه, قهوه ایتالیایی,  قهوه شیراز,  قهوه فروشی شیراز,  خرید قهوه در شیراز, بهترین قهوه شیراز,  طعم قهوه , عطر قهوه,کیفیت قهوه, بسته بندی قهوه, ارسال قهوه, پرداخت آنلاین قهوه, تخفیف قهوه, هدیه قهوه",
  manifest: "/manifest.json",
  keywords:
    "coffee, online coffee shop,Traditional Iranian coffee,Organic Iranian coffee,Fair trade Iranian coffee,Specialty Iranian coffee,Iranian coffee with saffron,Iranian coffee with cardamom,Iranian coffee with rosewater,Iranian coffee with pistachio,Iranian coffee with almond,Iranian coffee from Tehran,Iranian coffee from Shiraz,Iranian coffee from Isfahan,Iranian coffee from Tabriz,Iranian coffee from Mashhad,Iranian coffee gifts ,Iranian coffee subscription,Iranian coffee brewing guide,Iranian coffee history,Iranian coffee culture,Iranian coffee,Persian coffee,Iranian coffee beans,Persian coffee beans,Iranian coffee shop online,Persian coffee shop online,Buy Iranian coffee online, Buy Persian coffee online, Iranian coffee export,Persian coffee export,coffee beans, coffee shop in Leipzig, Shahbalout Coffee , شاه بلوط قهوه , خرید قهوه شاه بلوط , قهوه تخصصی شاه بلوط , قهوه آلی شاه بلوط, دانه قهوه شاه بلوط, قهوه اسپرسو شاه بلوط, قهوه فیلتر شاه بلوط, قهوه ترک شاه بلوط,   بهترین قهوه شاه بلوط, قیمت قهوه شاه بلوط, خرید آنلاین قهوه شاه بلوط, قهوه شاه بلوط لایپزیگ, دانه قهوه تازه شاه بلوط, قهوه شاه بلوط ارگانیک, هدیه قهوه شاه بلوط, آموزش دم آوری قهوه شاه بلوط,  قهوه عربیکا, قهوه روبوستا, قهوه تک خاستگاه, قهوه ترکیب, قهوه بدون کافئین, قهوه سرد, قهوه نیترژن, قهوه فرانسه, قهوه ایتالیایی,  قهوه شیراز,  قهوه فروشی شیراز,  خرید قهوه در شیراز, بهترین قهوه شیراز,  طعم قهوه , عطر قهوه,کیفیت قهوه, بسته بندی قهوه, ارسال قهوه, پرداخت آنلاین قهوه, تخفیف قهوه, هدیه قهوه",

  openGraph: {
    title: "Shahbalout Coffee | شــاه بلــــــــوط",
    description:
      "coffee, online coffee shop,Traditional Iranian coffee,Organic Iranian coffee,Fair trade Iranian coffee,Specialty Iranian coffee,Iranian coffee with saffron,Iranian coffee with cardamom,Iranian coffee with rosewater,Iranian coffee with pistachio,Iranian coffee with almond,Iranian coffee from Tehran,Iranian coffee from Shiraz,Iranian coffee from Isfahan,Iranian coffee from Tabriz,Iranian coffee from Mashhad,Iranian coffee gifts ,Iranian coffee subscription,Iranian coffee brewing guide,Iranian coffee history,Iranian coffee culture,Iranian coffee,Persian coffee,Iranian coffee beans,Persian coffee beans,Iranian coffee shop online,Persian coffee shop online,Buy Iranian coffee online, Buy Persian coffee online, Iranian coffee export,Persian coffee export,coffee beans, coffee shop in Leipzig, Shahbalout Coffee , شاه بلوط قهوه , خرید قهوه شاه بلوط , قهوه تخصصی شاه بلوط , قهوه آلی شاه بلوط, دانه قهوه شاه بلوط, قهوه اسپرسو شاه بلوط, قهوه فیلتر شاه بلوط, قهوه ترک شاه بلوط,   بهترین قهوه شاه بلوط, قیمت قهوه شاه بلوط, خرید آنلاین قهوه شاه بلوط, قهوه شاه بلوط لایپزیگ, دانه قهوه تازه شاه بلوط, قهوه شاه بلوط ارگانیک, هدیه قهوه شاه بلوط, آموزش دم آوری قهوه شاه بلوط,  قهوه عربیکا, قهوه روبوستا, قهوه تک خاستگاه, قهوه ترکیب, قهوه بدون کافئین, قهوه سرد, قهوه نیترژن, قهوه فرانسه, قهوه ایتالیایی,  قهوه شیراز,  قهوه فروشی شیراز,  خرید قهوه در شیراز, بهترین قهوه شیراز,  طعم قهوه , عطر قهوه,کیفیت قهوه, بسته بندی قهوه, ارسال قهوه, پرداخت آنلاین قهوه, تخفیف قهوه, هدیه قهوه",
    url: "https://shahbalout.com/",
    siteName: "Shahbalout Coffee",
    images: [
      {
        url: "/assets/logo/logoMainShare.png",
        width: 512,
        height: 512,
        alt: "Shahbalout Coffee Preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="theme-color" content="#590004" />
      <body
        className={`
                ${modamEL.variable} ${modamL.variable}  ${modamR.variable}
                ${modamM.variable} ${modamBo.variable}  ${modamBl.variable} ${modamEng.variable}
                ${thin.variable} ${black.variable} ${peydablack.variable} font-modamEL`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
