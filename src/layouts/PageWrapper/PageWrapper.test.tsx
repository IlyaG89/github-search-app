import React from 'react';
import { render } from '@testing-library/react';
import PageWrapper from './PageWrapper';

describe('<PageWrapper />', () => {
  describe('render PageWrapper', () => {
    it('should render page wrapper children', () => {
      const { getByText } = render(<PageWrapper>page wrapper content</PageWrapper>);
      const linkElement = getByText(/page wrapper content/i);
      expect(linkElement).toBeInTheDocument();
    });
  })
});
