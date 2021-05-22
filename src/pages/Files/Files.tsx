import React from 'react';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import { FilesList, ReadMeContent } from '../../components';
import useEffects from './hooks';

const Files: React.FC = () => {
  const {
    isError,
    loading,
    username,
    repository,
    files,
    loadingReadMe,
    readMeContent
  } = useEffects();
  if (isError) {
    return (
      <h1 style={{ color: 'red' }}>
        No user named {username} with repository {repository}
      </h1>
    );
  }

  if (loading) {
    return ( <CircularProgress /> );
  }

  return (
    <>
      <h1>
        User:
        <Link
          to={`/repos/${username}`}
          style={{ color: 'black', margin: ' 0 1vh' }}
        >
          {username},
        </Link>
        repository content of {repository}:
      </h1>
      <FilesList files={files} />
      {loadingReadMe
        ? <CircularProgress />
        : <ReadMeContent content={readMeContent} />
      }
    </>
  );
};

export default Files;
