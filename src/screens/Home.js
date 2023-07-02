import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppStyles from '../styles/AppStyles';
import LogoutButton from '../components/LogoutButton';

export default function HomePage({ navigation }) {
  const username = useSelector(state => state.username);

  return (
    <View style={AppStyles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={AppStyles.header}>CFG Calendar App</Text>
        <Text style={AppStyles.header}>Hi, {username}</Text>
      </View>
      <View style={AppStyles.buttonContainer}>
        <TouchableOpacity style={AppStyles.buttonStyle} onPress={() => navigation.navigate('Events')}>
          <Icon name="calendar" size={24} color="purple" />
          <Text style={AppStyles.textStyle}>Events</Text>
        </TouchableOpacity>

        <TouchableOpacity style={AppStyles.buttonStyle} onPress={() => navigation.navigate('Tasks')}>
          <Icon name="list" size={24} color="purple" />
          <Text style={AppStyles.textStyle}>Tasks</Text>
        </TouchableOpacity>

        <TouchableOpacity style={AppStyles.buttonStyle} onPress={() => navigation.navigate('Reminders')}>
          <Icon name="bell" size={24} color="purple" />
          <Text style={AppStyles.textStyle}>Reminders</Text>
        </TouchableOpacity>
      </View>

      <View style={AppStyles.logoutButton}>
        <LogoutButton />
      </View>
    </View>
  );
}