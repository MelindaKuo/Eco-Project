
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { Widget } from '@/components/Widget';
import LevelWidget from '@/components/LevelWidget'; 
import RecentCollectionsWidget from '@/components/RecentCollectionsWidget';
import NavigationBar from '../../components/NavigationBar'; 

import { useState } from "react";
import { StackNavigationProp } from '@react-navigation/stack';

import CustomButton from "../../components/CustomButton";
import { useGlobalContext } from "../../context/GlobalProvider";

import { signOut, addCurrentUserScore, getAllScores, getCurrentUserScore } from "../../lib/appwrite";

type HomeScreenProps = {
  navigation: StackNavigationProp<any, any>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  //  export function HomeScreen() {
  const [isSubmitting, setSubmitting] = useState(false);
  const { setUser, setIsLogged } = useGlobalContext();

  const logout = async () => {
    setSubmitting(true);
    await signOut();

    setUser(null);
    setIsLogged(false);

    navigation.navigate('Welcome')
  };

  const testUpdate = async () => {
    console.log("\n=========== start updating ====");
    const curScore = await getCurrentUserScore();
    console.log("===>current user score:" + curScore);

    console.log("===>add score by 10");
    const newScore = await addCurrentUserScore(10);
    console.log("===>score returned:" + newScore);
    const curScore1 = await getCurrentUserScore();
    console.log("===>current user score:" + curScore1);

    const users = await getAllScores();
    console.log("===>total: " + users.length);
    for (let i = 0; i < users.length; i++) {
      console.log("===>" + i +": user:" + users[i].username + " score:" + users[i].score);
      console.log(users[i]);
    }
  };

  return (

    <View style={styles.screenContainer}>
      <View style={{ backgroundColor: 'lightblue', padding: 35 }}>
        <TouchableOpacity 
          style={{ position: 'absolute', right: 10, top: 45 }} 
          onPress={logout}
        >
        <Text style={{ color: 'red', fontWeight: 'bold' }}>Sign Out</Text>
        </TouchableOpacity>
      </View>

      <ParallaxScrollView headerBackgroundColor={{ light: '#FFFFFF', dark: '#1D3D47' }}>
        <CustomButton
          title="Test Update"
          handlePress={testUpdate}
          containerStyles="mt-28 w-60"
          isLoading={isSubmitting} textStyles={undefined}      
        />

        <ThemedView style={styles.titleContainer}>
          <Widget source={require('../../assets/images/recyclebackgroundtemp.jpg')} width={340} height={250} text="Fact" />

          <View style={styles.holder}>
            <RecentCollectionsWidget />
          </View>

          <View style={styles.rowContainer}>
            <Widget source={require('../../assets/images/trash bac.jpg')} width={160} height={150} text="Second widget!" />
            <Widget source={require('../../assets/images/trash bac.jpg')} width={160} height={150} text="Second widget!" />
          </View>

          <View style={styles.holder}>
            <LevelWidget />
          </View>

          <View style={styles.holder}>
            <Widget source={require('../../assets/images/whitebackground.jpg')} width={340} height={250} text="Cleanup Opportunities" />
            <Widget source={require('../../assets/images/whitebackground.jpg')} width={340} height={250} text="How This Works" />
          </View>

          <Widget source={require('../../assets/images/temptrashimg.jpg')} width={340} height={150} text="Second widget!" />
        </ThemedView>
      </ParallaxScrollView>

      <NavigationBar />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 25,
    marginTop: 50,
  },
  holder: {
    shadowColor: '#6DB6EC',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    gap: 20,
    padding: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    gap: 17,
  },

});

export default HomeScreen;
