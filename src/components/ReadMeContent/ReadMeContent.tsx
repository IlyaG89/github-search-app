import React, { useRef, useEffect } from 'react';
import { render } from 'react-dom';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type ReadMeContentProps = {
  content: string;
};

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 700,
    marginTop: '7vh'
  },
});

const ReadMeContent: React.FC<ReadMeContentProps> = ({ content }) => {
  const classes = useStyles();
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current && content) {
      render(<ReactMarkdown remarkPlugins={[gfm]} children={content} />, ref.current);
    }
  }, [ref, content]);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.root}
    >
      <div ref={ref} id="readme" />
    </Grid>
  );
};

export default ReadMeContent;
