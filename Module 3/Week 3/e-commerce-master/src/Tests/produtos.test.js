import { act, render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Produtos from '../Pages/Produtos';
fireEvent
test('', () => {
  render(
    <BrowserRouter>
      <Produtos handleCarrinho={() => {}} carrinho={[{}]}></Produtos>
    </BrowserRouter>
  )
  const produtos = screen.getAllByTestId('produtos')
  fireEvent.click(produtos[0])
});
