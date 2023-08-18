import React from 'react';
import '../Styles/404.css';

function Page404() {
  return (
    <div className="page404">
      404
      <button data-testid="botao" type="button">Click Me</button>
      <input placeholder='digite o produto desejado'></input>
      <img alt='imagem muito bonita'></img>
    </div>
  );
}
export default Page404;
