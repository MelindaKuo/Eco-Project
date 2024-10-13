import React from 'react';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import PictureModal from '../../components/Modal';
import NavigationBar from '@/components/NavigationBar';

export default function App() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [isModalVisible, setModalVisible] = useState(false);
  
  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.outerContainer} />
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  function handlePictureButtonPress() {
    setModalVisible(true);
  }

  return (
    <View style={styles.outerContainer}>
      {/* Instruction Text */}
      <Text style={styles.instructionText}>Take a picture of your trash!</Text>
      
      {/* Camera view with border */}
      <View style={styles.cameraContainer}>
        <CameraView style={styles.camera} facing={facing}>
          {/* Button to toggle the camera */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing} />
          </View>
        </CameraView>
      </View>

      {/* Capture button placed below the camera */}
      <View style={styles.captureButtonContainer}>
        <TouchableOpacity style={styles.captureButton} onPress={handlePictureButtonPress}>
          <View style={styles.circle} />
        </TouchableOpacity>
      </View>
      
      <PictureModal isVisible={isModalVisible} onClose={() => setModalVisible(false)} />
      <NavigationBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  instructionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20, 
  },
  cameraContainer: {
    width: '90%',   
    height: '70%', 
    borderTopWidth: 40,  
    borderBottomWidth: 40, 
    borderLeftWidth: 20,   
    borderRightWidth: 20, 
    borderColor: '#fff',   
    backgroundColor: '#ccc', 
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
  
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  captureButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0, 
  },
  captureButton: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 40,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: '#282828', 
  },
});
