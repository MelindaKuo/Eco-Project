import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type SignUpScreenProps = {
  navigation: StackNavigationProp<any, any>;
};

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Add your signup form here */}
      <Button
        title="Create Account"
        onPress={() => navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],  // Make sure 'Home' matches the name in Stack.Screen
        })}
      />
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

export default SignUpScreen;
