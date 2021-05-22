import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton
} from '@material-ui/core';
import GithubIcon from '@material-ui/icons/GitHub';

const NavBar = () => {
  return (
    <AppBar position="static" style={{ minHeight: '5vh' }}>
      <Toolbar>
        <Typography variant="h6">
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <GithubIcon />
            </IconButton>
            Github search app
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
