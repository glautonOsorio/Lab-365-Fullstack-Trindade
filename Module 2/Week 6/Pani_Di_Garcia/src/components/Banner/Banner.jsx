import React from "react";
import "./banner.css";
import PropTypes from "prop-types";

const Banner = (props) => {
  return (
    <React.Fragment>
      <nav>
        <div className="bannerContent">
          <span>{props.span}</span>
          <h2>
            {props.h2}
            <span className="bannerDot">.</span>
          </h2>
        </div>
      </nav>
    </React.Fragment>
  );
};

Banner.propTypes = {
  span: PropTypes.string.isRequired,
  h2: PropTypes.string.isRequired,
};

export default Banner;
