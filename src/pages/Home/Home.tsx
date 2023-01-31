import React from "react";
import HomeBusiness from "./HomeBusiness/HomeBusiness";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import HomeExplore from "./HomeExplore/HomeExplore";
import HomeFingertips from "./HomeFingertips/HomeFingertips";
import HomeGuide from "./HomeGuide/HomeGuide";
import HomeLogoMaker from "./HomeLogoMaker/HomeLogoMaker";
import HomeSlideProject from "./HomeSlideProject/HomeSlideProject";
import HomeSlideService from "./HomeSlideService/HomeSlideService";
import HomeTrust from "./HomeTrust/HomeTrust";
import { useLocation } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
  
  
  return (
    <>
      <HomeCarousel />
      <HomeTrust />
      <HomeSlideService />
      <HomeFingertips />
      <HomeExplore />
      <HomeBusiness />
      <HomeLogoMaker/>
      <HomeSlideProject />
      <HomeGuide />
    </>
  );
};

export default Home;
