import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import ImageViewer from './components/ImageViewer';
import Button from './components/Button';

const placeholderImage = require("./assets/images/neco.jpg")

export default function App() {
 const pickImageAsync = async() =>{
  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    quality: 1,
  })
  if(!result.canceled ){
    console.log(result)
  }else{
    alert("You didn't select any Image");
  }
 }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <ImageViewer PlaceholderImageSource={placeholderImage}/>
       </View>
       <View style={styles.footerContainer}>
          <Button onPress={pickImageAsync} theme="primary" label={"Choose a photo"}/>
          <Button label={"Use this photo"}/>
       </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textprops:{
    color: "#fff",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
});
