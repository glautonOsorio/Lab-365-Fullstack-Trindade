import React from "react";
import "./headerCss.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <div className="headerContainer">
          <h1 className="headerH1">Pane Di Garcia</h1>
          <ul className="headerList">
            <li>
              <Link to={"/"} className="link">
                Produtos
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="link">
                Contato
              </Link>
            </li>
            <li>
              <Link to={"/faq"} className="link">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
