import React, { useContext } from "react";
import "./banner.css";
import { BannerContext } from "../../contexts/BannerContext";

const Banner = ({ title, subTitle }) => {
  const { bannerData, setBannerData } = useContext(BannerContext);

  setBannerData({ title, subTitle });
  return (
    <nav>
      <div className="bannerContent">
        <span>{title}</span>
        <h2>
          {subTitle}
          <span className="bannerDot">.</span>
        </h2>
      </div>
    </nav>
  );
};

export default Banner;
