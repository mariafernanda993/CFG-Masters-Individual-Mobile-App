import React from 'react';
import { Button } from 'react-native';
import { useDispatch } from 'react-redux';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch an action to reset the username in the Redux store
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <Button title="Logout" onPress={handleLogout} />
  );
};

export default LogoutButton;