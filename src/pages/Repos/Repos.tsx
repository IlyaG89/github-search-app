import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { ReposList } from '../../components'
import useEffects from './hooks';

const Repos: React.FC = () => {
  const { isError, loading, username, repos } = useEffects();
  if (isError) {
    return ( <h1 style={{ color: 'red' }}> No user named {username} </h1> );
  }

  if (loading) {
    return ( <CircularProgress /> );
  }

  if (!repos.length) {
    return ( <h1> {username} has no repositories </h1> );
  }

  return (
    <>
      <h1> {username} repositories: </h1>
      <ReposList repos={repos} username={username}/>
    </>
  );
};

export default Repos;
