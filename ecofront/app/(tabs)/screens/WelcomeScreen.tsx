import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type WelcomeScreenProps = {
  navigation: StackNavigationProp<any, any>;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.buttonContainerLogin} 
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.buttonContainerCreateAccount} 
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Shift buttons to the bottom
    alignItems: 'center',
    gap: 15,
    marginBottom: 120, // Optional: Add some margin from the bottom
  },
  buttonContainerLogin: {
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 20,
    overflow: 'hidden',
    width: 300,
    height: 65,
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
  },
  buttonContainerCreateAccount: {
    backgroundColor: '#6DB6EC', // Change this to your desired color
    borderRadius: 20,
    width: 300,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18, // Change text size
    color: 'black', // Change text color for contrast
    textAlign: 'center', // Center the text
  },
});

export default WelcomeScreen;
