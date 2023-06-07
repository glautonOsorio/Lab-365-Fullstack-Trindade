import React from "react";
import PropTypes from "prop-types";
import css from "../styles/main.css";

function Input(props) {
  return (
    <React.Fragment>
      <input placeholder={props.texto} className="inputMain"></input>
    </React.Fragment>
  );
}
Input.propTypes = {
  texto: PropTypes.string.isRequired,
  texto2: PropTypes.number.isRequired,
  texto3: PropTypes.bool,
};

export default Input;

{
  /*dessa vez não vou tirar gearal sem avisar*/
}
