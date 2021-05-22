import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFiles, getReadMe } from '../../server';
import { FilesParamTypes, File } from '../../types';

const useEffects = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingReadMe, setLoadingReadMe] = useState(true);
  const [readMeContent, setReadMeContent] = useState('');
  const { username, repository } = useParams<FilesParamTypes>();

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const repositories = await getFiles(username, repository);
        setFiles(repositories);
      } catch (e) {
        setIsError(true);
      } finally {
        setLoadingReadMe(false);
      }
    };

    const fetchReadMe = async () => {
      try {
        const { content } = await getReadMe(username, repository);
        setReadMeContent(atob(content));
      } catch (e) {
        return;
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
    fetchReadMe();
  }, [username, repository]);

  return {
    isError,
    loading,
    loadingReadMe,
    username,
    repository,
    files,
    readMeContent
  };
}

export default useEffects;
