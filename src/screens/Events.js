import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EventsPage = () => {
  const events = [
    { day: 'TUE', date: 11, eventName: 'Industry Event', time: '6.00 p.m.' },
    { day: 'SAT', date: 15, eventName: 'Brunch with Friends', time: '10.00 a.m.' },
    { day: 'WED', date: 20, eventName: 'Opticians Appointment', time: '1.00 p.m.' },
    { day: 'SUN', date: 23, eventName: 'Lunch with Family', time: '1.00 p.m.' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>July</Text>
      {events.map((event, index) => (
        <View key={index} style={styles.eventContainer}>
          <View style={styles.dateContainer}>
            <Text style={styles.dayText}>{event.day}</Text>
            <Text style={styles.dateText}>{event.date}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.eventName}>{event.eventName}</Text>
            <Text style={styles.time}>{event.time}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lavender',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'purple',
    textAlign: 'center',
    marginVertical: 10,
  },
  eventContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dateContainer: {
    marginRight: 10,
    alignItems: 'center',
  },
  dayText: {
    fontSize: 14,
    color: 'purple',
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'purple',
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: 'purple',
    borderRadius: 10,
    padding: 10,
    opacity: 0.8,
  },
  eventName: {
    fontSize: 16,
    color: 'white',
  },
  time: {
    fontSize: 14,
    color: 'white',
  },
});

export default EventsPage;
