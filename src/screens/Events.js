import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import AppStyles from '../styles/AppStyles';

const EventsPage = () => {
  const username = useSelector(state => state.username);

  const events = [
    { day: 'TUE', date: 11, eventName: 'Industry Event', time: '6.00 p.m.' },
    { day: 'SAT', date: 15, eventName: 'Brunch with Friends', time: '10.00 a.m.' },
    { day: 'WED', date: 20, eventName: 'Opticians Appointment', time: '1.00 p.m.' },
    { day: 'SUN', date: 23, eventName: 'Lunch with Family', time: '1.00 p.m.' },
  ];

  return (
    <View style={AppStyles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={AppStyles.header}>July</Text>
        <Text style={AppStyles.header}>Hi, {username}</Text>
      </View>
      {events.map((event, index) => (
        <View key={index} style={AppStyles.eventContainer}>
          <View style={AppStyles.dateContainer}>
            <Text style={AppStyles.dayText}>{event.day}</Text>
            <Text style={AppStyles.dateText}>{event.date}</Text>
          </View>
          <View style={AppStyles.detailsContainer}>
            <Text style={AppStyles.eventName}>{event.eventName}</Text>
            <Text style={AppStyles.time}>{event.time}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default EventsPage;
