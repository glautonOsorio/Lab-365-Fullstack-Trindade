/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import '../Styles/App.css';
import React from 'react';

function Header({ carrinholength, filter, title }) {
  return (
    <header className="header">
      <div className="logo-placeholder">
        <div className="logo">
          shoop
        </div>
      </div>
      <div className="header-items">
        <div>{title}</div>
        { filter }
        { carrinholength >= 0
          && (
          <Link className="carrinho-link" to="/carrinho">
            <div>
              {'Carrinho: '}
              <div data-testid="carrinho_length">{carrinholength}</div>
            </div>
          </Link>
          )}
      </div>
    </header>
  );
}

export default Header;
