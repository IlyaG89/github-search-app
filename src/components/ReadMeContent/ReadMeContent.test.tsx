import React from 'react';
import { render, screen } from '@testing-library/react';
import ReadMeContent from './ReadMeContent';

describe('<ReadMeContent />', () => {
  describe('render ReadMeContent', () => {
    it('should not render ReadMeContent content', () => {
      const { container } = render(<ReadMeContent content={''}/>);
      const paragraph = container.querySelector('p');
      expect(paragraph).toBeNull();
    });
    it('should render ReadMeContent content', () => {
      const { getByText, container } = render(<ReadMeContent content={'ReadMeContent content'}/>);
      const paragraph = container.querySelector('p');
      expect(paragraph).toBeInTheDocument();
      const linkElement = getByText(/ReadMeContent content/i);
      expect(linkElement).toBeInTheDocument();
    });
  })
});
