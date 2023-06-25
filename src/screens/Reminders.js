import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Reminders = () => {
    return (
        <View style={StyleSheet.container}>
            <Text style={styles.header}>July, 8th 2023</Text>
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
    }
});

export default Reminders;