import React from "react";
import PropTypes from "prop-types";
import css from "../styles/main.css";

function Button(props) {
  return (
    <React.Fragment>
      <button type="submit" className="botao">
        {props.texto}
      </button>
    </React.Fragment>
  );
}
Button.protoTypes = {
  texto: PropTypes.string.isRequired,
  texto2: PropTypes.number.isRequired,
  texto3: PropTypes.bool,
};

export default Button;
