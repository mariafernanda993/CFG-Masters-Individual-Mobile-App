import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';

const TasksPage = () => {
  const [checked, setChecked] = useState([false, false, false, false, false]); // initial state for all tasks is not checked

  const tasks = [
    'Buy friend\'s birthday present',
    'Pick up dry cleaning',
    'Water plants',
    'Submit report',
    'Make presentation slides',
  ];

  const handleCheck = (index) => {
    let newChecked = [...checked]; // copying the old array
    newChecked[index] = !newChecked[index]; // change the check status of the target task

    setChecked(newChecked); // set the new checks status to the state

    // Only alert if task is completed
    if (!newChecked[index]) {
      Alert.alert('Task completed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tasks</Text>
      {tasks.map((task, index) => (
        <View key={index} style={styles.taskContainer}>
          <CheckBox
            checked={checked[index]}
            onPress={() => handleCheck(index)}
            checkedColor='purple'
            uncheckedColor='purple'
          />
          <Text style={styles.taskText}>{task}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'lavender',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: 20,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskText: {
    fontSize: 18,
    color: 'purple',
  },
});

export default TasksPage;
