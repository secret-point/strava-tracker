import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ActivitiesScreen from '../screens/ActivitiesScreen';
import MonthlyStatsScreen from '../screens/MonthlyStatsScreen';
import MonthlyActivitiesScreen from '../screens/MonthlyActivitiesScreen';

const Stack = createStackNavigator();

const AppNavigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Activities" component={ActivitiesScreen} />
      <Stack.Screen name="Monthly Stats" component={MonthlyStatsScreen} />
      <Stack.Screen name="Monthly Activities" component={MonthlyActivitiesScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
