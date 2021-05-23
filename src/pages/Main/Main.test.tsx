import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event'
import { render, fireEvent } from '@testing-library/react';
import Main from './Main';

const mockInput = 'mock input';
const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('<Main />', () => {
  describe('render main page', () => {
    it('should render input', () => {
      const { getByRole } = render(<Main />);
      const input = getByRole('textbox');
      expect(input).toBeInTheDocument();
    });
  });
  describe('user interaction', () => {
    it('should change input', () => {
      const { getByPlaceholderText } = render(<Main />);
      const input = getByPlaceholderText(/Search github user/i) as HTMLInputElement;
      userEvent.type(input, mockInput);
      expect(input.value).toBe(mockInput);
    });
    it('should redirects to correct URL on click', () => {
      const { getByRole } = render(
        <Router>
          <Main />
        </Router>
      );
      const input = getByRole('textbox') as HTMLInputElement;
      userEvent.type(input, mockInput);
      fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
      expect(mockHistoryPush).toHaveBeenCalledWith(`repos/${mockInput}`);
    });
  });
});