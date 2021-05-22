import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const useEffects = () => {
  const history = useHistory();
  const [userName, setUserName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  }
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if(e.key === 'Enter'){
      history.push(`repos/${userName}`)
    }
  }

  return {
    userName,
    handleChange,
    handleKeyPress
  }
}

export default useEffects;