import React from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import useEffects from './hooks';

const Main: React.FC = () => {
  const { userName, handleChange, handleKeyPress} = useEffects()
  return (
    <>
      <TextField
        value={userName}
        onKeyDown={handleKeyPress}
        onChange={handleChange}
        variant="outlined"
        placeholder="Search github user"
        InputProps={{
          startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment>,
          endAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>
        }}
        style={{ width: 400 }}/>
    </>
  );
};

export default Main;