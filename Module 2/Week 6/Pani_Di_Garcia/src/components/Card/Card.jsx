import React from "react";
import "./cardCss.css";

function Card({ itens }) {
  return (
    <>
      {itens.map((item, index) => {
        return (
          <div key={index} className="cardContainer">
            <div className="cardContent">
              <div className="cardImageContainer">
                <img src={item?.image} alt="erro" />
              </div>
              <div className="cardList">
                <h3>{item?.name} </h3>
                <span className="cardDescription"> {item?.description}</span>
                <div className="cardBottomRow">
                  <span className="cardPrice">R${item?.price} </span>
                  <button className="cardButton">Receita</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
