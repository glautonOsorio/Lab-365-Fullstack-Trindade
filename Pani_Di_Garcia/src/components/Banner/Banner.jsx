import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <React.Fragment>
      <nav>
        <div className="bannerContent">
          <span>ESCOLHA O MELHOR PARA VOCÊ</span>
          <h2>
            NOSSOS PRODUTOS<a className="bannerDot">.</a>
          </h2>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Banner;
