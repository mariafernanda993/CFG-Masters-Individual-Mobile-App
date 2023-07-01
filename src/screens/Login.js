import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import styles from '../styles/AppStyles'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Username or password field cannot be empty.');
    } else {
      // Get stored credentials
      const storedCredentials = JSON.parse(await AsyncStorage.getItem('credentials'));
  
      if (!storedCredentials || storedCredentials.username !== username || storedCredentials.password !== password) {
        // The username and password don't match what's stored
        Alert.alert('Error', 'Invalid credentials');
      } else {
        // The user is logged in
        Alert.alert('Success', 'Logged in successfully');
        // TODO: Navigate to another screen
      }
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
    </View>
  );
};

export default Login;