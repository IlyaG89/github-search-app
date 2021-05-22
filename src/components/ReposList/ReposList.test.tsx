import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import ReposList from './ReposList';

const ITEMS_NUMBER = 10;
const mockUserName = 'IlyaG89';
const mockRepos = Array(ITEMS_NUMBER).fill(0).map((_, i) =>
  ({ name: `file${i}`, id: i }));

describe('<ReposList />', () => {
  describe('render ReposList', () => {
    it('should not render list element if repos are empty', () => {
      const { queryByRole } = render(
        <Router>
          <ReposList repos={[]} username={mockUserName} />
        </Router>
      );
      const listElement = queryByRole('separator');
      expect(listElement).not.toBeInTheDocument();
    });
    it('should render all repos of props', () => {
      const { queryAllByRole } = render(
        <Router>
          <ReposList repos={mockRepos} username={mockUserName}/>
        </Router>
      );
      const listElements = queryAllByRole('separator');
      expect(listElements).toHaveLength(ITEMS_NUMBER);
    });
  });
});
