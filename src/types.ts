export interface ReposParamTypes {
  username: string;
}

export interface Repo {
  id: number;
  name: string;
}

export interface FilesParamTypes {
  username: string;
  repository: string;
}

export interface File {
  name: string;
  type: string;
}

export interface ReadMeFile {
  content: string;
}
