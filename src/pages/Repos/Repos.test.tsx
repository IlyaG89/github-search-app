import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render  } from '@testing-library/react';
import axios from 'axios';
import Repos from './Repos';

const mockAxios = axios as jest.Mocked<typeof axios>;
const mockUserName = 'mockUserName';
const ITEMS_NUMBER = 10;
const mockRepos = Array(ITEMS_NUMBER).fill(0).map((_, i) =>
  ({ name: `file${i}`, id: i }));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ username: mockUserName })
}));

describe('<Repos />', () => {
  describe('render repos page', () => {
    it('Should render error message on fetch fail', async () => {
      mockAxios.get.mockRejectedValueOnce(new Error());
      const { findByText } = render(
        <Router>
          <Repos/>
        </Router>
      );
      expect(mockAxios.get).toHaveBeenCalledWith(`users/${mockUserName}/repos`);
      const message = await findByText(`No user named ${mockUserName}`);
      expect(message).toBeInTheDocument();
    });
    it('Should render no repos message when no repos', async () => {
      mockAxios.get.mockResolvedValueOnce({ data: [] });
      const { findByText } = render(
        <Router>
          <Repos/>
        </Router>
      );
      expect(mockAxios.get).toHaveBeenCalled();
      const message = await findByText(/has no repositories/i);
      expect(message).toBeInTheDocument();
    });
    it('Should fetch repos from API', async () => {
      mockAxios.get.mockResolvedValueOnce({ data: mockRepos });
      const { findAllByRole } = render(
        <Router>
          <Repos/>
        </Router>
      );
      expect(mockAxios.get).toHaveBeenCalled();
      const listElements = await findAllByRole('separator');
      expect(listElements).toHaveLength(ITEMS_NUMBER);
    });
  });
});