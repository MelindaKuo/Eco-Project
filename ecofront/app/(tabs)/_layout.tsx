import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // headerShown: false,
        tabBarStyle: {
          backgroundColor: '#6DB6EC', // Set your desired background color
          borderTopWidth: 0, // Remove the default border
          borderRadius: 30, // Set the border radius for rounded edges
          paddingVertical: 10, // Add some vertical padding
          marginHorizontal: 20, // Center the tab bar by adding horizontal margins
          position: 'absolute', // Ensure it doesn't take full height
          bottom: 20, // Adjust position if needed
          elevation: 5, // Add shadow for elevation (Android)
          height: 65, 
          width: 350
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
