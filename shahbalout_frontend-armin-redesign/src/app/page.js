import NaviTab from "./Components/Global/NaviTab";
import NaviBottom from "./Components/Global/NaviBottom";
//import seoConfig from "../../next-seo.config";
//import { DefaultSeo } from "next-seo";
import Head from "next/head";
import Herosection from "./Components/PageHomeComponents/Herosection";
//import SloganSection from "./Components/PageHomeComponents/SloganSection";
import TransitionEffect1 from "./Components/Global/TransitionEffect1";
import ScreenWrapper from "./Components/Global/ScreenWrapper";
import AboutMe from "./Components/PageHomeComponents/AboutMe";
import MapSection from "./Components/PageHomeComponents/MapSection";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <ScreenWrapper>
      <Head>
        <title>
          قهوه سرا شاه بلوط: سفارش آنلاین انواع قهوه خرید قهوه آنلاین: تازه و با
          کیفیت، از شاه بلوط
        </title>
      </Head>

      <NaviTab activeLink={"Home"} Logo={true} />

      <TransitionEffect1>
        <Herosection />
      </TransitionEffect1>
      <MapSection />
      <AboutMe />
      <NaviBottom activeLink={"Home"} />
    </ScreenWrapper>
  );
}
