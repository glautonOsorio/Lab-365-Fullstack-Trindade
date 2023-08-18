/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import '../Styles/Carrinho.css';
import Header from '../Components/Header';
import Button from '../Components/Button';

function Carrinho({ carrinho }) {
  const [valorTotal, setValorTotal] = useState(0);
  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < carrinho.length; i += 1) {
      sum += carrinho[i].price;
    }
    setValorTotal(sum.toFixed(2));
  }, [carrinho]);

  return (
    <div className="carrinho">
      <Header />
      <div className="carrinho-content">
        <div className="listaCarrinho">
          {
              carrinho.map((e) => (
                <div className="itemCarrinho">
                  <img alt={e.name} src={e.images} />
                  <div>
                    <p>{e.name}</p>
                    <p>{e.price}</p>
                  </div>
                </div>
              ))
            }
        </div>
        <div className="carrinho-checkout">
          Carrinho
          <p>
            Valor Total:
            {' '}
            {valorTotal}
          </p>
          <Button to="/produtos" text="Continuar Comprando" />
          <Button to="/checkout" text="Checkout" />
        </div>
      </div>
    </div>
  );
}
export default Carrinho;
