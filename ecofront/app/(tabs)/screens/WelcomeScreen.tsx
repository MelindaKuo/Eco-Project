import React, { useEffect } from 'react';
import { StatusBar } from "expo-status-bar";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from "react-native-safe-area-context";

import images from "../../../constants/images";
import Loader from "../../../components/Loader";
import { useGlobalContext } from "../../../context/GlobalProvider";

type WelcomeScreenProps = {
  navigation: StackNavigationProp<any, any>;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  const { loading, isLogged } = useGlobalContext();

  useEffect(() => {
    if (!loading && isLogged) {
      navigation.navigate('Home');
    }
  });

  return (
    <SafeAreaView className="bg-black h-full">
      <Loader isLoading={loading} />

      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >

        <View style={styles.container}>

          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.turtle}
            className="max-w-[380px] w-full h-[208px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-2xl text-white font-bold text-center">
              Put Trash in its{"\n"}
              Right Places with{" "}
              <Text className="text-amber-600 text-3xl">ECO</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8 "
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
          Recycle your waste, save energy, conserve resources and preserve the nature of the world with ECO
          </Text>

          <TouchableOpacity
            style={styles.buttonContainerLogin}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainerCreateAccount}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 15,
    marginBottom: 60, // Optional: Add some margin from the bottom
  },
  buttonContainerLogin: {
    backgroundColor: '#6DB6EC', // Change this to your desired color
    borderColor: 'white',
    borderWidth: 5,

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
    marginBottom: 5, 
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
