import React from 'react';
import { render } from '@testing-library/react';
import Main from './Main';

describe('<Main />', () => {
  describe('render main page', () => {
    it('should render input', () => {
      const { getByRole } = render(<Main />)
      const input = getByRole('textbox');
      expect(input).toBeInTheDocument();
    });
    it('with placeholder', () => {
      const { queryByPlaceholderText } = render(<Main />)
      const input = queryByPlaceholderText(/earch github user/i);
      expect(input).toBeInTheDocument();
    });
  })
})