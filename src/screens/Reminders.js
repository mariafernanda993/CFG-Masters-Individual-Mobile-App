import React from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";

const Reminders = () => {
    return (
        <View style={StyleSheet.container}>
            <Text style={styles.header}>July 8th, 2023</Text>
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
                <TouchableOpacity
                style={styles.reminderBox}
                onPress={() => {
                    Alert.alert(
                        'Reminders for This Week',
                        'Pick Up Friend from Airport',
                        );
                    }}
                >
                    <Text style={styles.reminderBoxTitle}>This Week</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.reminderBox}
                onPress={() => {
                    Alert.alert(
                        'Reminders for This Month',
                        'No Other Reminders for this Month',
                        );
                    }}
                >
                    <Text style={styles.reminderBoxTitle}>This Month</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>All Reminders</Text>
            </View>
            <View style={styles.subheaderContainer}>
                <Text style={styles.subheaderText}>July 8, 2023</Text>
            </View>
            <View style={styles.reminderBox}>
                <Text style={styles.reminderText}>Book Train Tickets</Text>
            </View>
            <View style={styles.subheaderContainer}>
                <Text style={styles.subheaderText}>July 14, 2023</Text>
            </View>
            <View style={styles.reminderBox}>
                <Text style={styles.reminderText}>Pick Up Friend From Airport</Text>
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
        marginTop: 40,
    },
    reminderBoxesContainer: {
        flexDirection:'row',
        justifyContent: 'space-evenly',
        marginBottom: 10,
        marginTop: 30,
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
      subheaderContainer: {
        marginTop: 20,
        marginBottom: 10,
    },
    subheaderText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'purple',
    },
    reminderBox: {
        backgroundColor: '#b298dc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },
    reminderText: {
        fontSize: 16,
        color: 'white',
    },
    headerContainer: {
        marginTop: 40,
        marginBottom: 10,
      },
      headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'purple',
        textAlign: 'center'
      },        
});

export default Reminders;