import React from "react";
import "./cardCss.css";
import PropTypes from "prop-types";

function Card({ itens }) {
  return (
    <>
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
Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
