import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import "./Home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <Announcement />
      <Navbar />
      <Slider />
    </div>
  );
};

export default Home;
