import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <React.Fragment>
      <nav>
        <div className="bannerContent">
          <span>ESCOLHA O MELHOR PARA VOCÊ</span>
          <h2>
            NOSSOS PRODUTOS<span className="bannerDot">.</span>
          </h2>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Banner;
