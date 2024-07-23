import { Link } from "react-router-dom";
import React from "react";
import HomeSlider from "./HomeSlider";
import CardsHome from "./CardsHome";
import Header from "../header/Header";
import Features from "./Features;";
import TeamSection from "./TeamSection";
import TicketCard from "./TicketCard";
import MyLocation from "../geolocation/Geolocation";
import ImageSliderr from "../homePage/ImageSlider1";
import i18n from "./i18n";  
import Testi18n from "./testi18n";  




function Home() {
  return (
    <>

      <HomeSlider />
      <Features />

    
      <CardsHome />
      <TicketCard />
      <TeamSection />
      <MyLocation />


      <MyLocation />
    </>
  );
}
export default Home;
