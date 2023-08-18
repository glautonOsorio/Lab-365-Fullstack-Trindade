/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import '../Styles/Button.css';
import React from 'react';

function Button({
  to,
  text,
  type = 'success',
  onclick,
}) {
  return (
    <Link className="link" to={to}>
      <button type="button" onClick={onclick} className={`button ${type}`}>
        {text}
      </button>
    </Link>
  );
}
export default Button;
