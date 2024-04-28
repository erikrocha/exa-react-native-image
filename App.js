import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';

export default function App() {
    
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text>Open up App.js to start working on your appp!</Text>
        <Image 
          source={{ uri: 'https://images.wallpapersden.com/image/download/purple-glowing-wave-4k-windows-11_bmZmZWuUmZqaraWkpJRobWllrWdma2U.jpg' }} 
          indicator={ProgressBar.pie} 
          indicatorProps={{
            size: 80,
            borderWidth: 0,
            color: 'rgba(150, 150, 150, 1)',
            unfilledColor: 'rgba(200, 200, 200, 0.2)'
          }}
          style={{
            width: 320, 
            height: 240, 
          }}
        />
        <Image 
          source={{ uri: 'https://images.wallpapersden.com/image/download/liquid-abstract-hd-multi-color_bmZlbG6UmZqaraWkpJRnamtorWZpaGs.jpg' }} 
          indicator={ProgressBar}
          indicatorProps={{
            size: 80,
            borderWidth: 0,
            color: 'rgba(150, 150, 150, 1)',
            unfilledColor: 'rgba(200, 200, 200, 0.2)'
          }} 
          style={{
            width: 320, 
            height: 240, 
          }}
        />
        <Image 
          source={{ uri: 'https://images.wallpapersden.com/image/download/mind-stress-hd-abstract_bmdlZWaUmZqaraWkpJRmbmdlrWZlbmw.jpg' }} 
          indicator={ProgressBar} 
          style={{
            width: 320, 
            height: 240, 
          }}
        />
        <Image 
          source={{ uri: 'https://images.wallpapersden.com/image/download/orange-layers-hd-abstract-colors_bmZpZWyUmZqaraWkpJRmbmdlrWZlbWU.jpg' }} 
          indicator={ProgressBar} 
          style={{
            width: 320, 
            height: 240, 
          }}
        />
        <Image 
          source={{ uri: 'https://avisoscenter.nyc3.cdn.digitaloceanspaces.com/cars/renault.jpeg' }} 
          indicator={ProgressBar} 
          style={{
            width: 320, 
            height: 240, 
          }}
        />
        <Image 
          source={{ uri: 'https://avisoscenter.nyc3.cdn.digitaloceanspaces.com/cars/volkswagen-2.jpeg' }} 
          indicator={ProgressBar} 
          style={{
            width: 320, 
            height: 240, 
          }}
        />
      </ScrollView>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '75%',
    height: '50%',
    position: 'absolute', // Makes the image cover the whole container
  },
  scrollViewContent: {
    alignItems: 'center',
    justifyContent: 'center'
  },
});

