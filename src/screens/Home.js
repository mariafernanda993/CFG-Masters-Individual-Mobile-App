import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the CFG Calendar App</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Events')}>
          <Icon name="calendar" size={24} color="purple" />
          <Text style={styles.textStyle}>Events</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Tasks')}>
          <Icon name="list" size={24} color="purple" />
          <Text style={styles.textStyle}>Tasks</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Reminders')}>
          <Icon name="bell" size={24} color="purple" />
          <Text style={styles.textStyle}>Reminders</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'lavender',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  buttonContainer: {
    alignItems: 'flex-start',
    width: '100%',
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 18,
    marginLeft: 10,
  },
});
