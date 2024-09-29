import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type WelcomeScreenProps = {
  navigation: StackNavigationProp<any, any>;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>

      <TouchableOpacity 
        style={styles.buttonContainerLogin} 
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonTextLogin}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.buttonContainerCreateAccount} 
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.buttonTextCreateAccount}>Create Account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F5F8FA',
    paddingHorizontal: 20, 
    paddingBottom: 100, 
  },
  buttonContainerLogin: {
    borderColor: '#4D9FEC', 
    borderWidth: 2,
    borderRadius: 20,
    width: 280,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonTextLogin: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4D9FEC',
    textAlign: 'center',
  },
  buttonContainerCreateAccount: {
    backgroundColor: '#4D9FEC',
    borderRadius: 20,
    width: 280,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5, 
  },
  buttonTextCreateAccount: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff', 
    textAlign: 'center',
  },
});

export default WelcomeScreen;
