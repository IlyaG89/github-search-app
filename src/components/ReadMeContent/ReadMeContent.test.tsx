import React from 'react';
import { render } from '@testing-library/react';
import ReadMeContent from './ReadMeContent';

describe('<ReadMeContent />', () => {
  describe('render ReadMeContent', () => {
    it('should render ReadMeContent content', () => {
      const { getByText } = render(<ReadMeContent content={'ReadMeContent content'}/>);
      const linkElement = getByText(/ReadMeContent content/i);
      expect(linkElement).toBeInTheDocument();
    });
  })
});
