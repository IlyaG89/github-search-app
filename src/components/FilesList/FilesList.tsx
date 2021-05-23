import React from 'react';
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FolderIcon from '@material-ui/icons/Folder';
import FileIcon from '@material-ui/icons/InsertDriveFile';
import { File } from '../../types';

type FilesListProps = {
  files: File[];
};

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 360,
    overflow: 'auto',
    maxHeight: '60vh'
  }
});

const FilesList: React.FC<FilesListProps> = ({ files }) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      { files.map(({ name, type}) =>
        <React.Fragment key={name}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                {type === 'dir'
                  ? <FolderIcon />
                  : <FileIcon />}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={name} />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      )}
    </List>
  );
};

export default FilesList;
