import React from "react";
import "./headerCss.css";

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <div className="headerContainer">
          <h1 className="headerH1">Pane Di Garcia</h1>
          <ul className="headerList">
            <li>
              <a href="#">Produtos</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
          </ul>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
