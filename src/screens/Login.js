import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from '../styles/AppStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Username or password field cannot be empty.');
    } else {
      // retrieve stored credentials
      const storedCredentialsString = await AsyncStorage.getItem('credentials');
      const storedCredentials = JSON.parse(storedCredentialsString);

      if (!storedCredentials) {
        Alert.alert('Error', 'Invalid credentials');
      } else {
        const matchedUser = storedCredentials.find(
          (cred) => cred.username === username && cred.password === password
        );

        if (!matchedUser) {
          Alert.alert('Error', 'Invalid credentials');
        } else {
          Alert.alert('Success', 'Logged in successfully');
          console.log('Dispatching username: ', username); // This will log the username being dispatched
          dispatch({ type: 'LOGIN', payload: username }); 
          navigation.navigate('Home');
        }
      }
    }
  };

  const handleRegister = async () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Username or password field cannot be empty.');
    } else {

      //check whether there are existing credentials and retrieve them, otherwise set storedCredentials as empty array '[]'
      const storedCredentialsString = await AsyncStorage.getItem('credentials');
      const storedCredentials = storedCredentialsString ? JSON.parse(storedCredentialsString) : [];

      //if credentials exist, check whether username already exists
      if (storedCredentials.length > 0) {
        const existingUser = storedCredentials.find(
          (cred) => cred.username === username
        );

        if (existingUser) {
          Alert.alert('Error', 'Username already exists. Please choose a different username.');
          return;
        }

        // new array to store new credentials and set them as a JSON string in AsyncStorage
        const newCredentials = [...storedCredentials, { username, password }];
        await AsyncStorage.setItem('credentials', JSON.stringify(newCredentials));
        Alert.alert('Success', 'Registered successfully');
        //if length of storedCredentials =0 (a.k.a, there are no stored credentials)
      } else {
        const newCredentials = [{ username, password }];
        await AsyncStorage.setItem('credentials', JSON.stringify(newCredentials));
        Alert.alert('Success', 'Registered successfully');
      }

      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default Login;