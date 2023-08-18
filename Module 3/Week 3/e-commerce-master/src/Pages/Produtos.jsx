/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import mock from '../Mock/mock_produtos.json';
import '../Styles/Produtos.css';
import Header from '../Components/Header';

function Produtos({ handleCarrinho, carrinho }) {

  const [produtos, setProdutos] = useState(mock);
  const [carrinholength, setCarrinhoLength] = useState(0);
  useEffect(() => {
    setCarrinhoLength(carrinho.length);
  }, [carrinho.length]);
  
  const filter = (
    <label htmlFor="page-filter">
      <input
        aria-label="barra de pesquisa"
        className="page-filter"
        placeholder="Pesquise os melhores produtos"
        id="page-filter"
        onChange={(e) => setProdutos([...mock.filter((produto) => new RegExp(e.target.value, 'i').test(produto.name))])}
      />
    </label>
  );
  return (
    <div>
      <Header filter={filter} carrinholength={carrinholength} />
      <h1>Nossos Produtos</h1>
        {
            produtos.map((e) => (
                <div
                  tabIndex="0"
                  role="button"
                  onKeyDown={({ key }) => {
                    if (key === 'Enter') handleCarrinho(e);
                  }}
                  className="cardProduto"
                  onClick={() => handleCarrinho(e)}
                  data-testid="produtos"
                >
                  <img  alt={e.description} src={e.images} />
                  <p>{e.name}</p>
                  <p>{e.price}</p>
                </div>
            ))
          }
      </div>
  );
}
export default Produtos;
