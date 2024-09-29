
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavigationBar from '../../components/NavigationBar';

const StatsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Camera Screen</Text>

      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default StatsScreen;
