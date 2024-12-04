import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

const MonthlyStatsScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Monthly Stats'>>();

  const handleNavigate = (month: string) => {
    navigation.navigate('Monthly Activities', {
      month: month,
      token: 'your_token_here',
    });
  };

  return (
    <View style={styles.container}>
      <Button title="View November Activities" onPress={() => handleNavigate('2023-11')} />
      <Button title="View October Activities" onPress={() => handleNavigate('2023-10')} />
      <Button title="View September Activities" onPress={() => handleNavigate('2023-09')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MonthlyStatsScreen;
