import React from "react";
import header from "../styles/Header.css";
import menu from "../images/menu.png";
import foto from "../images/Roberto1.jpeg";

function Header() {
  const nome = "Roberto Garcia";
  return (
    <div className="header">
      <ul>
        <li>
          <a>Gmail</a>
        </li>
        <li>
          <a>Imagens</a>
        </li>
        <li>
          <img src={menu} alt="Menu" />
        </li>
        <li>
          <img src={foto} alt="Foto" className="foto" />
        </li>
      </ul>
    </div>
  );
}

export default Header;
