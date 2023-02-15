import React, { useState } from "react";
import { View, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { convertUriToBlob } from "../const";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
export default function UploadImage() {
  const [image, setImage] = useState(null);

  const handlePress = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.uri);
        const blob = await convertUriToBlob(result.uri);
        const fileRef = ref(getStorage(), "images/" + Date.now() + ".png");
        const snapshot = await uploadBytes(fileRef, blob);
        console.log("Uploaded a blob or file!", snapshot);
        const downloadUrl = await getDownloadURL(fileRef);
        console.log("File available at", downloadUrl);
        console.log("blob", blob);
      } else {
        console.log("User cancelled image picker");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Button title="Pick an image" onPress={handlePress} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
}
