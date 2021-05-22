import axios, { AxiosResponse } from 'axios';
import { File, ReadMeFile, Repo } from './types';

const instance = axios.create({ baseURL: 'https://api.github.com/' });

const responseBody = (response: AxiosResponse) => response.data;
const getRequest = (url: string) => instance.get(url).then(responseBody)

export const getRepos = (username: string): Promise<Repo[]> =>
  getRequest(`users/${username}/repos`);

export const getFiles = (username: string, repository: string): Promise<File[]> =>
  getRequest(`repos/${username}/${repository}/contents`);

export const getReadMe = (username: string, repository: string): Promise<ReadMeFile> =>
  getRequest(`/repos/${username}/${repository}/readme`);
