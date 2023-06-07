import React from "react";
import googleLogo from "../images/google-logo-1.png";
import main from "../styles/main.css";
import Button from "./button";
import Input from "./input.js";

function Main() {
  return (
    <React.Fragment>
      <div className="main">
        <img className="logo" src={googleLogo} alt="Google Logo" />
        <Input texto="Pesquise aqui" texto2={1997} texto3 />
        <div className="main-btn">
          <Button texto="Pesquisa Google" texto2={35} texto3 />
          <Button texto="Estou com sorte" texto2={35} texto3={false} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Main;
