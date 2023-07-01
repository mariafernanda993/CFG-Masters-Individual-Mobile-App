import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';
import AppStyles from '../styles/AppStyles';

const TasksPage = () => {
  const [checked, setChecked] = useState([false, false, false, false, false]);

  const tasks = [
    'Buy friend\'s birthday present',
    'Pick up dry cleaning',
    'Water plants',
    'Submit report',
    'Make presentation slides',
  ];

  const handleCheck = (index) => {
    let newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
    if (!newChecked[index]) {
      Alert.alert('Task completed');
    }
  };

  return (
    <View style={AppStyles.container}>
      <Text style={AppStyles.header}>This Week:</Text>
      {tasks.map((task, index) => (
        <View key={index} style={AppStyles.taskContainer}>
          <CheckBox
            checked={checked[index]}
            onPress={() => handleCheck(index)}
            checkedColor='purple'
            uncheckedColor='purple'
          />
          <Text style={AppStyles.taskText}>{task}</Text>
        </View>
      ))}
    </View>
  );
};

export default TasksPage;