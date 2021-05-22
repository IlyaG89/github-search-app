import React from 'react';
import { Grid } from '@material-ui/core';

type PageContentProps = {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageContentProps> = ({ children }) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      style={{ width: '100%', minHeight: '90vh', padding: '5vh' }}
    >
      { children }
    </Grid>
  );
};

export default PageWrapper;
