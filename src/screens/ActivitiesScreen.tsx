import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import { useActivities } from '../hooks/useActivities';
import ActivityCard from '../components/ActivityCard';

const ActivitiesScreen: React.FC = () => {
  const { data, isLoading, error } = useActivities('116832242a45d36e7397dd528ac53b6d03406a31');

  if (isLoading) return <View style={styles.center}><Text>Loading...</Text></View>;
  if (error) return <View style={styles.center}><Text>Error loading activities</Text></View>;
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ActivityCard activity={item} />}
    />
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ActivitiesScreen;
