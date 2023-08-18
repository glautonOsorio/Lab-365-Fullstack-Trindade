import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Button from '../Components/Button';

test('', () => {
  render(
    <BrowserRouter>
      <Button text="botao" />
    </BrowserRouter>
  )
  const text = screen.getByText('botao')
  expect(text).toBeInTheDocument()
});
