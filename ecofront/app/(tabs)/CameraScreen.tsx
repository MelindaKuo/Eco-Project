import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
import NavigationBar from '../../components/NavigationBar';

import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import PictureModal from '../../components/Modal';

export default function App() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [isModalVisible, setModalVisible] = useState(false);
  
  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  function handlePictureButtonPress() {
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            {/* <Text style={styles.text}>Flip Camera</Text> */}
          </TouchableOpacity>
          <View style={styles.captureButtonContainer}>
            <TouchableOpacity style={styles.captureButton} onPress={handlePictureButtonPress}>
              <View style={styles.circle} />
            </TouchableOpacity>
          </View>
        </View>
      </CameraView>
      <PictureModal isVisible={isModalVisible} onClose={() => setModalVisible(false)} />
      <NavigationBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end', 
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    // alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  captureButtonContainer: {
    alignItems: 'center',
    marginBottom: 20, 
  },
  captureButton: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 40,
  },
  circle: {
    width: 70,        
    height: 70,         
    borderRadius: 35, 
    backgroundColor: 'white', 
    shadowColor: '#000',  
  },
});
