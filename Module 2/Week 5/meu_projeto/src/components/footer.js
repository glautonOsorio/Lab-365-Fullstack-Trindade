import React from "react";
import css from "../styles/Footer.css";

function Footer() {
  const nome = "Roberto Garcia";
  return (
    <div className="footer">
      <div className="footer1">
        <span>Brasil</span>
      </div>
      <div className="footer2">
        <ul className="firstList">
          <li>
            <a>Sobre</a>
          </li>
          <li>
            <a>Publicidade</a>
          </li>
          <li>
            <a>Negócios</a>
          </li>
          <li>
            <a>Como funciona a Pesquisa</a>
          </li>
        </ul>
        <ul className="secondList">
          <li>
            <a>Privacidade</a>
          </li>
          <li>
            <a>Termos</a>
          </li>
          <li>
            <a>Configuração</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
