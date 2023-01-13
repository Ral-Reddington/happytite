import React from "react";
import HeroComponent from "../reuseable-components/HeroComponent";
import Nutriblogcomponents from "../reuseable-components/Nutriblogcomponents";
import TrendingComponent from "../reuseable-components/TrendingComponent";

const HomePage = () => {
  return (
    <div className="">
      <HeroComponent />
      <TrendingComponent />
      <Nutriblogcomponents />
    </div>
  );
};

export default HomePage;
