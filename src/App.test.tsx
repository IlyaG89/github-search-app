import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Github search app link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Github search app/i);
  expect(linkElement).toBeInTheDocument();
});
