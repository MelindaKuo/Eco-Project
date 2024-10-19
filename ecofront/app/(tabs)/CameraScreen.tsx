


import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image, Alert } from 'react-native';
import NavigationBar from '@/components/NavigationBar';

const API_URL = ''; 

export default function App() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [imageUri, setImageUri] = useState<string | null>(null);
  const cameraRef = useRef<CameraView | null>(null); 

  if (!permission) {
 
    return <View />;
  }

  if (!permission.granted) {

    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <TouchableOpacity onPress={requestPermission} style={styles.grantButton}>
          <Text style={styles.grantButtonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log('Picture taken:', photo.uri);
      setImageUri(photo.uri); 
    }
  };

  const handleClosePreview = () => {
    setImageUri(null); 
  };

  // const handleProceed = async () => {
  //   if (imageUri) {
  //     const formData = new FormData();
  //     formData.append('file', {
  //       uri: imageUri,
  //       name: 'image.jpg',
  //       type: 'image/jpeg',
  //     });
      
  //     try {
  //       const response = await fetch(`${API_URL}classify/`, {
  //         method: 'POST',
  //         body: formData,
  //       });
        
  
  //       const text = await response.text(); 
  //       console.log('Raw response:', text); 
  
  //       if (!response.ok) {
  //         const errorData = JSON.parse(text); 
  //         throw new Error(errorData.detail || 'Network response was not ok');
  //       }
  
  //       const result = JSON.parse(text); 
  //       console.log('Response from API:', result);
  //       Alert.alert('Prediction Result', `Predicted: ${result.prediction}`);
  //     } catch (error) {
  //       console.error('Error sending image:', error);
  //       Alert.alert('Error', error.message || 'Failed to send image to API');
  //     }
  //   } else {
  //     Alert.alert('Error', 'No image captured. Please take a picture first.');
  //   }
  // };
  
  
  
  
  

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <View style={styles.circle} />
          </TouchableOpacity>
        </View>
      </CameraView>

      {imageUri && (
        <View style={styles.imagePreviewContainer}>
          <View style={styles.polaroid}>
            <Image source={{ uri: imageUri }} style={styles.capturedImage} />
            <TouchableOpacity style={styles.closeButton} onPress={handleClosePreview}>
              <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
              <Text style={styles.buttonText}>→</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <NavigationBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#fff',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  grantButton: {
    backgroundColor: '#282828',
    padding: 10,
    borderRadius: 5,
  },
  grantButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  camera: {
    flex: 1,
    width: '100%', 
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  capturedImage: {
    width: '100%',
    height: '100%', 
    borderRadius: 10, 
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    bottom: 70,
  },
  imagePreviewContainer: {
    position: 'absolute',
    top: '30%', 
    left: '50%', 
    transform: [{ translateX: -150 }, { translateY: -100 }], 
    width: 300, 
    height: 400, 
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, 
  },
  polaroid: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: '100%', 
    height: '100%', 
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
  proceedButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },
});
