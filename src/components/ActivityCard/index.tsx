import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Activity } from '../../types/activity';

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{activity.name}</Text>
      <Text>Date: {new Date(activity.start_date).toLocaleDateString()}</Text>
      <Text>Distance: {activity.distance} meters</Text>
      <Text>Elevation Gain: {activity.total_elevation_gain} meters</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ActivityCard;
