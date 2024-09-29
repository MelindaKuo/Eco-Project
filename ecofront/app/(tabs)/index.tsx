
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { Widget } from '@/components/Widget';
import LevelWidget from '@/components/LevelWidget'; 
import RecentCollectionsWidget from '@/components/RecentCollectionsWidget';
import NavigationBar from '../../components/NavigationBar'; 

export function HomeScreen() {
  return (
    <View style={styles.screenContainer}>
      <ParallaxScrollView headerBackgroundColor={{ light: '#FFFFFF', dark: '#1D3D47' }}>
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
    gap: 25,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 17,
  },
});

export default HomeScreen;
