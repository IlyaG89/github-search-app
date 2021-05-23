import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import NavBar from './NavBar';

describe('<NavBar />', () => {
  describe('render NavBar', () => {
    it('should render Github search app link', () => {
      const { getByText } = render(<Router><NavBar /></Router>);
      const linkElement = getByText(/Github search app/i);
      expect(linkElement).toBeInTheDocument();
    });
  })
});
