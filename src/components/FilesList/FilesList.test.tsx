import React from 'react';
import { render } from '@testing-library/react';
import FilesList from './FilesList';

const ITEMS_NUMBER = 10;
const mockFiles = Array(ITEMS_NUMBER).fill(0).map((_, i) =>
  ({ name: `file${i}`, type: 'file' }));

describe('<FilesList />', () => {
  describe('render FilesList', () => {
    it('should not render list element if files are empty', () => {
      const { queryByRole } = render(<FilesList files={[]} />);
      const listElement = queryByRole('separator');
      expect(listElement).not.toBeInTheDocument();
    });
    it('should render all files of props', () => {
      const { queryAllByRole } = render(<FilesList files={mockFiles} />);
      const listElements = queryAllByRole('separator');
      expect(listElements).toHaveLength(ITEMS_NUMBER);
    });
  });
});
