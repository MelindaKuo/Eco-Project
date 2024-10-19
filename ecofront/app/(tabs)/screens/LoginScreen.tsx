import React from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions, Alert, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Link } from '@react-navigation/native';
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../../components/CustomButton";
import FormField from "../../../components/FormField";
import images from "../../../constants/images";
import { useGlobalContext } from "../../../context/GlobalProvider";
import { getCurrentUser, signIn } from "../../../lib/appwrite";

type LoginScreenProps = {
  navigation: StackNavigationProp<any, any>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);

    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser();
      setUser(result);
      setIsLogged(true);

      Alert.alert("Success", "User signed in successfully");
      navigation.navigate('Home');
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
            source={images.RevitaLogo}
            resizeMode="start"
            className="w-[80px] h-[80px]"
          />

          <Text className="text-2xl font-semibold text-black mt-10 font-psemibold">
            Log in to Revita
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
            placeholder={undefined}

          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            placeholder={undefined}
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles={{ paddingHorizontal: 20, marginTop: 100 }}
            isLoading={isSubmitting}
            textStyles={undefined}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-black font-pregular">
              Don't have an account?
            </Text>

            <Link to={{ screen: 'SignUp' }}
              style={{ fontSize: 18, color: "#ffa500", fontWeight: 'bold', position: 'relative', top: 4 }}
            >
              <Text>Sign Up</Text> 
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
