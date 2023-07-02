import React from 'react';
import { Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogout = () => {
    // Dispatch an action to reset the username in the Redux store
    dispatch({ type: 'LOGOUT' });
    navigation.navigate('Login');
  };

  return (
    <Button title="Logout" onPress={handleLogout} />
  );
};

export default LogoutButton;