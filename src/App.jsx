import logo from "./logo.svg";
import "./App.css";
import React from "react";
import NavBar from "./components/navbar/navbar";
import Image from "./components/Image/image";

import Features from "./components/features/Features";
import Explore from "./components/explore/Explore";
import Pricing from "./components/pricing/Pricing";
import Magazine from "./components/magazine/Magazine";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/footer/Footer";
import Download from "./components/download/Download";
import Testimonial from "./components/testimonial/Testimonial";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Image></Image>
      <Features></Features>
      <Explore></Explore>
      <Pricing></Pricing>
      <Magazine></Magazine>
      <FAQ></FAQ>
      <Testimonial></Testimonial>
      <Download></Download>
      <Footer></Footer>
    </div>
  );
}

export default App;
