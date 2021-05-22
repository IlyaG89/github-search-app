import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRepos } from '../../server';
import { ReposParamTypes, Repo } from '../../types';

const useEffects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { username } = useParams<ReposParamTypes>();

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const repositories = await getRepos(username);
        setRepos(repositories);
      } catch (e) {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, [username]);

  return {
    isError,
    loading,
    username,
    repos
  };
}

export default useEffects;
