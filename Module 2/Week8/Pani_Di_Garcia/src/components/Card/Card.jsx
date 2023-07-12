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
                  <img className="cardImage" src={item?.image} alt="erro" />
                </div>
                <div className="cardList">
                  <h3 className="cardName">{item?.name} </h3>
                  <span className="cardDescription"> {item?.description}</span>
                  {false && (
                    <ul>
                      <li>{item?.ingredients.item_1}</li>
                      <li>{item?.ingredients.item_2}</li>
                      <li>{item?.ingredients.item_3}</li>
                      <li>{item?.ingredients.item_4}</li>
                      <li>{item?.ingredients.item_5}</li>
                      <li>{item?.ingredients.item_6}</li>
                    </ul>
                  )}
                  <div className="cardBottomRow">
                    <span className="cardPrice">R${item?.price}.00 </span>
                    <button className="cardButton" onClick={() => Modal(item)}>
                      Mais Sobre
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
            <div className="togleContent">
              <div className="togleHeader">
                <button className="togleButton" onClick={Modal}>
                  X
                </button>
              </div>
              {popUp.map((pop) => {
                return (
                  <div key={pop.id} className="togleCard">
                    <div className="togleImageContainer">
                      <img className="togleImage" src={pop?.image} alt="erro" />
                    </div>
                    <div className="togleText">
                      <div>
                        <h3 className="togleName">{pop.name}</h3>
                        <div className="togleDescription">
                          <span> {pop.description}</span>
                          <span>Ingredientes:</span>
                        </div>
                      </div>
                      <div className="togleList">
                        <ul>
                          <li>{pop?.ingredients.item_1}</li>
                          <li>{pop?.ingredients.item_2}</li>
                          <li>{pop?.ingredients.item_3}</li>
                          <li>{pop?.ingredients.item_4}</li>
                          <li>{pop?.ingredients.item_5}</li>
                          <li>{pop?.ingredients.item_6}</li>
                        </ul>
                      </div>
                      <div>
                        <span className="toglePrice">R${pop.price}.00</span>
                      </div>
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
