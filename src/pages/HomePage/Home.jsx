import React from "react";
import Footer from "../../components/Footer/Footer";
import Intro from "../../components/Intro/Intro";
import OurInfo from "../../components/OurInfo/OurInfo";
import Reviews from "../../components/Reviews/Reviews";
import Services from "../../components/Services/Services";
import Subscribe from "../../components/Subscribe/Subscribe";
const Home = () => {
  return (
    <div id="home">
      <Intro/>
      <Services/>
      <OurInfo/>
      <Reviews/>
      <Subscribe/>
    </div>
  )
};

export default Home;
