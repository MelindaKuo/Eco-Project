import React, { useState, useRef } from 'react';
import { Camera, CameraType, CameraCapturedPicture, useCameraPermissions } from 'expo-camera'; 
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import PictureModal from '../../components/Modal';
import NavigationBar from '@/components/NavigationBar';

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [isModalVisible, setModalVisible] = useState(false);
  const [imageUri, setImageUri] = useState<string | null>(null);
  // @ts-ignore
  const cameraRef = useRef<Camera | null>(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.outerContainer}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  const handlePictureButtonPress = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo.uri);
      setImageUri(photo.uri);
      setModalVisible(true);
    }
  };

  return (
    
    <View style={styles.outerContainer}>
      <Text style={styles.instructionText}>Take a picture of your trash!</Text>
      
      <View style={styles.cameraContainer}>
        {/* @ts-ignore */}
        <Camera style={styles.camera} ref={cameraRef}>
        </Camera>
      </View>

      <View style={styles.captureButtonContainer}>
        <TouchableOpacity style={styles.captureButton} onPress={handlePictureButtonPress}>
          <View style={styles.circle} />
        </TouchableOpacity>
      </View>
      
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 100, height: 100 }} />}
      
      <PictureModal isVisible={isModalVisible} onClose={() => setModalVisible(false)} />
      <NavigationBar />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  captureButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0, 
  },
  captureButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#282828', 
  },
});
