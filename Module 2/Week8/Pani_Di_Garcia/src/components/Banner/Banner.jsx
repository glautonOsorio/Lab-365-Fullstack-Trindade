import React, { useContext } from "react";
import "./banner.css";
import { BannerContext } from "../../contexts/BannerContext";

const Banner = () => {
  const { bannerData } = useContext(BannerContext);

  return (
    <nav>
      <div className="bannerContent">
        <span className="bannerTitle">{bannerData.title}</span>
        <h2 className="bannerSubTitle">
          {bannerData.subTitle}
          <span className="bannerDot">.</span>
        </h2>
      </div>
    </nav>
  );
};

export default Banner;
