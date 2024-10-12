import React from 'react';
import { View, Button, Text, ScrollView, Dimensions, Alert, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Link } from '@react-navigation/native';

import { useState } from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../../components/CustomButton";
import FormField from "../../../components/FormField";
import images from "../../../constants/images";
import { useGlobalContext } from "../../../context/GlobalProvider";
import { createUser } from "../../../lib/appwrite";

type SignUpScreenProps = {
  navigation: StackNavigationProp<any, any>;
};

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const { setUser, setIsLogged } = useGlobalContext();

  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submit = async () => {
    if (form.username === "" || form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);
    try {
      const result = await createUser(form.email, form.password, form.username);
      setUser(result);
      setIsLogged(true);

      navigation.navigate('Home')
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 400,
          }}
        >
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[34px]"
          />

          <Text className="text-2xl font-semibold text-black mt-10 font-psemibold">
            Sign Up to ECO
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-4"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-1"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-1"
          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles={{ paddingHorizontal: 20, marginTop: 100 }}
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-black-100 font-pregular">
              Have an account already?
            </Text>
            <Link to={{ screen: 'Login' }}
              style={{ fontSize: 18, color: "#ffa500", fontWeight: 'bold', position: 'relative', top: 4 }}
            >
              SignIn
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

export default SignUpScreen;
