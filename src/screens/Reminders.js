import React from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";

const Reminders = () => {
    return (
        <View style={StyleSheet.container}>
            <Text style={styles.header}>July, 8th 2023</Text>
            <View style={styles.reminderBoxesContainer}>
              <TouchableOpacity
                 style={styles.reminderBox}
                 onPress={() => {
                 Alert.alert(
                 'Reminders for Today',
                 'Book Train Tickets',
             );
         }}
     >
    <Text style={styles.reminderBoxTitle}>Today</Text>
  </TouchableOpacity>
                <View style={styles.reminderBox}>
                    <Text style={styles.reminderBoxTitle}>This Week</Text>
                    {/* TODO: Add the number of reminders for this week */}
                </View>
                <View style={styles.reminderBox}>
                    <Text style={styles.reminderBoxTitle}>This Month</Text>
                    {/* TODO: Add the number of reminders for this month */}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lavender',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: 'purple',
    },
    reminderBoxesContainer: {
        flexDirection:'row',
        justifyContent: 'space-evenly',
        marginBottom: 10,
    },
    reminderBox: {
        width: 100,
        height: 100,
        backgroundColor: 'purple',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
      },
      reminderBoxTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
      }, 
      remindersContainer: {
        marginVertical: 10,
      },          
});

export default Reminders;