import React, { useState } from "react";
import "./cardCss.css";
import PropTypes from "prop-types";

function Card({ itens }) {
  const [popUp, setPopUp] = useState([]);
  const [togle, setTogle] = useState(false);
  const Modal = (item) => {
    setPopUp([item]);
    setTogle(!togle);
  };
  return (
    <>
      <div>
        {itens.map((item) => {
          return (
            <div key={item.id} className="cardContainer">
              <div className="cardContent">
                <div className="cardImageContainer">
                  <img src={item?.image} alt="erro" />
                </div>
                <div className="cardList">
                  <h3>{item?.name} </h3>
                  <span className="cardDescription"> {item?.description}</span>
                  <div className="cardBottomRow">
                    <span className="cardPrice">R${item?.price}.00 </span>
                    <button className="cardButton" onClick={() => Modal(item)}>
                      Info
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {togle && (
        <div className="togleContainer" onClick={Modal}>
          <div className="togleBody" onClick={(e) => e.stopPropagation()}>
            <div className="togleHeader">
              <button className="togleButton" onClick={Modal}>
                X
              </button>
            </div>
            <div className="togleContent">
              {popUp.map((pop) => {
                return (
                  <div key={pop.id} className="togleCard">
                    <div className="togleImageContainer">
                      <img className="togleImage" src={pop?.image} alt="erro" />
                    </div>
                    <div className="togleContent">
                      <h3>{pop.name}</h3>
                      <span>{pop.description}</span>
                      <span>R${pop.price}.00</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
Card.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  id: PropTypes.number,
};

export default Card;
