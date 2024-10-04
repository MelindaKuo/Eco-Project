import React, { useEffect, useRef } from 'react';
import { Modal, View, Text, Button, StyleSheet, Image, Animated } from 'react-native';

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

export default function PictureModal({ isVisible, onClose }: Props) {
  const scaleValue = useRef(new Animated.Value(0)).current; 

  useEffect(() => {
    if (isVisible) {
      Animated.spring(scaleValue, {
        toValue: 1,
        friction: 3,
        tension: 40,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible, scaleValue]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose} 
    >
      <View style={styles.modalContainer}>
        <Animated.View style={[styles.modalContent, { transform: [{ scale: scaleValue }] }]}>
          <Text style={styles.modalTitle}>Compost</Text>
          <Image
            source={require('@/assets//images/recycle.png')} 
            style={styles.trashCanImage}
            resizeMode="contain"
          />
          <Text style={styles.modalPoints}>+10 Points!</Text>
          <Text style={styles.modalMessage}>
            Fun Fact!
          </Text>
          <Button title="Close" onPress={onClose} color="#FF6347" />
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: {
    width: 320,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FF6347', 
  },
  trashCanImage: {
    width: 150,
    height: 150, 
    marginBottom: 10,
  },
  modalPoints: {
    fontSize: 32,
    color: '#28A745', 
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#333',
  },
});
