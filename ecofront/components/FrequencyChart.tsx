import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

interface FrequencyChartProps {}

const FrequencyChart: React.FC<FrequencyChartProps> = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [5, 8, 3, 10, 7, 6, 4], 
        color: (opacity = 1) => `rgba(52, 152, 219, ${opacity})`, 
        strokeWidth: 2 
      },
    ],
  };

  return (
    <View style={styles.container}>

      <BarChart
        data={data}
        width={350}
        height={220} 
        fromZero={true} 
        withInnerLines={false} 
        withVerticalLabels={true} 
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0, 
          color: (opacity = 1) => `rgba(52, 152, 219, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#fff',
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
    marginRight: 50, 
    justifyContent:'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default FrequencyChart;