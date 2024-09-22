import { Image, StyleSheet, Platform, ScrollView, View } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {Widget} from '@/components/Widget';

export function HomeScreen() {
  return (
    
    <ParallaxScrollView headerBackgroundColor={{ light: '#FFFFFF', dark: '#1D3D47' }}>

      <ThemedView style={styles.titleContainer}>
        
        <Widget 
              source = {require('../../assets/images/recyclebackgroundtemp.jpg')}
              width = {340} 
              height = {250} 
              text = "Fact"
        />

        <View >

            <Widget
                source={require('../../assets/images/trash bac.jpg')}
                width={340}
                height={150}
                text="Second widget!"
            />
            <View style = {styles.miniTaskWidget}>
            <Widget
                source = {require('../../assets/images/whitebackground.jpg')}
                width = {300}
                height = {120}
                text = "Throw Away 10 Pieces of Trash"
                />
            </View>
        </View>

        <View style = {styles.holder}>
          <Widget
              source={require('../../assets/images/whitebackground.jpg')}
              width={340}
              height={250}
              text="Recent Collections"
          />
        </View>
        <View style = {styles.rowContainer}>
          <Widget
              source={require('../../assets/images/trash bac.jpg')}
              width={160}
              height={150}
              text="Second widget!"
          />
          <Widget
              source={require('../../assets/images/trash bac.jpg')}
              width={160}
              height={150}
              text="Second widget!"
          />
        </View>
        <View style = {styles.holder}>
          <Widget
              source={require('../../assets/images/whitebackground.jpg')}
              width={340}
              height={250}
              text="Avatar Here"
          />
        </View>

        <View style = {styles.holder}>
          <Widget
              source={require('../../assets/images/whitebackground.jpg')}
              width={340}
              height={250}
              text="Cleanup Opportunities"
          />
          <Widget
              source={require('../../assets/images/whitebackground.jpg')}
              width={340}
              height={250}
              text="How This Works"
          />

        </View>

        <Widget
            source={require('../../assets/images/temptrashimg.jpg')}
            width={340}
            height={150}
            text="Second widget!"
        />
      </ThemedView> 

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 25,
    marginTop: 50,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container: {
    padding: 16,
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'white', // Set background color to white
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Adjusts spacing between widgets
    width: '100%', // Makes sure it uses the full width
    gap: 17, // Optional: add some padding
  },
  miniTaskWidget: {
    position: "absolute",
    top: 15,
    left: 19,
    
  },
  holder:{
    shadowColor: '#6DB6EC',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    gap: 25
  }

});

export default HomeScreen