import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import axios from 'axios';
import Files from './Files';

const mockAxios = axios as jest.Mocked<typeof axios>;
const mockUserName = 'mockUserName';
const mockRepository = 'repository';
const mockReadmeContent = 'mockReadmeContent';
const ITEMS_NUMBER = 10;
const mockFiles = Array(ITEMS_NUMBER).fill(0).map((_, i) =>
  ({ name: `file${i}`, type: i > 5 ? 'file' : 'dir' }));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ username: mockUserName, repository: mockRepository })
}));

describe('<Files />', () => {
  describe('render files page', () => {
    it('Should render error message on fetch fail', async () => {
      mockAxios.get.mockRejectedValueOnce(new Error());
      const { findByText } = render(
        <Router>
          <Files/>
        </Router>
      );
      expect(mockAxios.get).toHaveBeenCalledWith(`repos/${mockUserName}/${mockRepository}/contents`);
      const message = await findByText(`No user named ${mockUserName} with repository ${mockRepository}`);
      expect(message).toBeInTheDocument();
    });
    it('Should fetch files and readme from API', async () => {
      mockAxios.get.mockResolvedValueOnce({ data: mockFiles });
      mockAxios.get.mockResolvedValueOnce({ data: { content: btoa(mockReadmeContent) } });
      const { findAllByRole, findByText } = render(
        <Router>
          <Files/>
        </Router>
      );
      expect(mockAxios.get).toHaveBeenCalledTimes(2);
      expect(mockAxios.get).toHaveBeenNthCalledWith(1, `repos/${mockUserName}/${mockRepository}/contents`);
      expect(mockAxios.get).toHaveBeenNthCalledWith(2, `/repos/${mockUserName}/${mockRepository}/readme`);
      const listElements = await findAllByRole('separator');
      expect(listElements).toHaveLength(ITEMS_NUMBER);
      const readmeContentParagraph = await findByText(mockReadmeContent);
      expect(readmeContentParagraph).toBeInTheDocument();
    });
  });
});