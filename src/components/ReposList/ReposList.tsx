import React from 'react';
import { Link } from 'react-router-dom';
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import WorkIcon from '@material-ui/icons/Work';
import { Repo } from '../../types';

type ReposListProps = {
  username: string;
  repos: Repo[];
};

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 360,
    overflow: 'auto',
    maxHeight: '60vh'
  },
});

const ReposList: React.FC<ReposListProps> = ({ username, repos }) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      { repos.map(({ id, name}) =>
        <Link to={`/files/${username}/${name}`} key={id} style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={name} />
          </ListItem>
          <Divider variant="inset" component="li" />
        </Link>
      )}
    </List>
  );
};

export default ReposList;
