import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Colors } from '../../constants/colors';
import OutlinedButton from '../UI/OutlinedButton';


export default function ImagePickerExample({onTakeImage}) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // allowsMultipleSelection: true,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });

    setImage(result.assets.at(0).uri);
    onTakeImage(result.assets.at(0).uri)
    console.log(result)

  };

  let imagePreview = <Text style={{color: 'white'}}>No image taken yet</Text>
  if(image){
    imagePreview = <Image source={{uri: image}} style={{width: '100%', height: 200}}/>
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{width: '100%', height: 200, marginVertical: 8, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.primary100, borderRadius: 4 }}>
        {imagePreview}
        </View>
      <OutlinedButton icon='camera' onPress={pickImage}>Take Image</OutlinedButton>
    </View>
  );
}
