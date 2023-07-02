import React from "react";
import "./footerCss.css";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footerContainer">
        <section className="containerRow">
          <div className="firstMenu">
            <h4 className="footerTittle">Pani.Di.Garcia</h4>
          </div>
          <div className="secondMenu">
            <h5 className="footerTittle">Contato</h5>
            <div className="footerList1">
              <li>+99 85 1871-8094</li>
              <li>kyoukugenryu@gmail.com</li>
            </div>
            <div className="footerList2">
              <li>Isola Maggiore, 06069, Tuoro sul Trasimeno</li>
              <li>Province of Perugia, Italy</li>
            </div>
          </div>
          <div className="thirdMenu">
            <h6 className="footerTittle">Informações</h6>
            <li>Produtos</li>
            <li>Contato</li>
            <li>Termos e Condições</li>
          </div>
        </section>
        <span className="footerSpan">
          Pani.Di.Garcia@ Alguns direitos reservados.
        </span>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
