import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppStyles from '../styles/AppStyles';

export default function HomePage({ navigation }) {
  return (
    <View style={AppStyles.container}>
      <Text style={AppStyles.header}>Welcome to the CFG Calendar App</Text>
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
    </View>
  );
}