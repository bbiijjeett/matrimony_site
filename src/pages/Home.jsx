import React from "react";
import Hero1 from "../components/Hero1";
import Slider from "../components/Slider";
import Faq from "../components/Faq";
import Service from "../components/Service";
import Price from "../components/Price";

const Home = () => {
  return (
    <div className="">
      <Hero1 />
      <Slider />
      <Service />
      <Price />
      <Faq />
    </div>
  );
};

export default Home;
