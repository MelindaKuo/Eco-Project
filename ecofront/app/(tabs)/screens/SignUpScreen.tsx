import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type SignUpScreenProps = {
  navigation: StackNavigationProp<any, any>;
};

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Create Account"
        onPress={() => navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],  
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
