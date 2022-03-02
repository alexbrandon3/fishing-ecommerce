import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import "./Home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
