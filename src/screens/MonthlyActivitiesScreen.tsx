import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useActivities } from '../hooks/useActivities';
import ActivityCard from '../components/ActivityCard';
import { Activity } from '../types/activity';

interface RouteParams {
  month: string;
  token: string;
}

const MonthlyActivitiesScreen: React.FC = () => {
  const route = useRoute();
  const { month, token } = route.params as RouteParams;

  const { data, isLoading, error } = useActivities(token);

  const filteredActivities = data?.filter((activity: Activity) => {
    const activityDate = new Date(activity.start_date);
    const activityMonth = `${activityDate.getFullYear()}-${(activityDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}`;
    return activityMonth === month;
  });

  if (isLoading) return <Text style={styles.center}>Loading...</Text>;
  if (error) return <Text style={styles.center}>Error loading activities</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredActivities}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ActivityCard activity={item} />}
        ListEmptyComponent={<Text>No activities found for this month.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default MonthlyActivitiesScreen;
