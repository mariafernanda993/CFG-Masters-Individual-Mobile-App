import React from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import AppStyles from "../styles/AppStyles";

const Reminders = () => {
    return (
        <View style={AppStyles.container}>
            <Text style={AppStyles.header}>July 8th, 2023</Text>
            <View style={AppStyles.reminderBoxesContainer}>
              <TouchableOpacity
                style={AppStyles.reminderBox}
                onPress={() => {
                    Alert.alert(
                        'Reminders for Today',
                        'Book Train Tickets',
                        );
                    }}
                >
                    <Text style={AppStyles.reminderBoxTitle}>Today</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={AppStyles.reminderBox}
                onPress={() => {
                    Alert.alert(
                        'Reminders for This Week',
                        'Pick Up Friend from Airport',
                        );
                    }}
                >
                    <Text style={AppStyles.reminderBoxTitle}>This Week</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={AppStyles.reminderBox}
                onPress={() => {
                    Alert.alert(
                        'Reminders for This Month',
                        'No Other Reminders for this Month',
                        );
                    }}
                >
                    <Text style={AppStyles.reminderBoxTitle}>This Month</Text>
                </TouchableOpacity>
            </View>
            <View style={AppStyles.headerContainer}>
                <Text style={AppStyles.headerText}>All Reminders</Text>
            </View>
            <View style={AppStyles.subheaderContainer}>
                <Text style={AppStyles.subheaderText}>July 8, 2023</Text>
            </View>
            <View style={AppStyles.reminderBox}>
                <Text style={AppStyles.reminderText}>Book Train Tickets</Text>
            </View>
            <View style={AppStyles.subheaderContainer}>
                <Text style={AppStyles.subheaderText}>July 14, 2023</Text>
            </View>
            <View style={AppStyles.reminderBox}>
                <Text style={AppStyles.reminderText}>Pick Up Friend From Airport</Text>
            </View>
        </View>
    );
};

export default Reminders;