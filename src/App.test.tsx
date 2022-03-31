import React from 'react';
import { screen, render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('check App', () => {
    render(<App />);
    expect(screen.getByText('Hello!')).toBeInTheDocument();
  });
});
