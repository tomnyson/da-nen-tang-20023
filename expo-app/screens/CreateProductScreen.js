import { useState } from "react";
import {
  TextInput,
  View,
  ToastAndroid,
  Text,
  StyleSheet,
  Button,
  Platform,
  Alert,
  Image,
} from "react-native";
import axios from "axios";
import { API } from "../const";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { db, storage } from "../firebaseConfig";
import * as ImagePicker from "expo-image-picker";
import { convertUriToBlob } from "../const";
import { getStorage, ref } from "firebase/storage";

const schema = yup
  .object({
    title: yup.string().required(),
    price: yup
      .number()
      .positive("price must greater than 0")
      .integer()
      .required(),
    description: yup.string().required(),
  })
  .required();

const CreateProductScreen = () => {
  const [product, setProduct] = useState({});
  const [image, setImage] = useState(null);

  const productRef = db.collection("products");
  const imageRef = storage.ref("images/");

  console.log(Platform.OS);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      price: 0,
      image: "",
      description: "",
    },
    resolver: yupResolver(schema),
  });
  console.log("errors", errors);
  const onSubmit = async (data) => {
    /**
     * upload hinh
     */
    const documentRef = await productRef.add({ ...data, image });
    if (documentRef) {
      ToastAndroid.show(documentRef.id, ToastAndroid.SHORT);
      reset({});
      setImage(null);
    }

    // const response = await axios.post(API, data);
    // if (response.status === 201) {
    //   reset({
    //     data: {
    //       title: "",
    //       price: 0,
    //       image: "",
    //       description: "",
    //     },
    //   });
    //   if (Platform.OS === "android") {
    //     ToastAndroid.show("thêm thành công !", ToastAndroid.SHORT);
    //   } else {
    //     Alert.alert("message", "thêm thành công");
    //   }
    // }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const blob = await convertUriToBlob(result.assets[0].uri);
      console.log("blob", blob);
      const id = Date.now();

      try {
        const upload = await imageRef.child(id + ".png").put(blob);
        //https://firebasestorage.googleapis.com/v0/b/tns-sendotp.appspot.com/o/images%2F1676450766695.png?alt=media
        setImage(
          `https://firebasestorage.googleapis.com/v0/b/tns-sendotp.appspot.com/o/images%2F${id}.png?alt=media`
        );
      } catch (error) {}
    }
  };

  // validate du lieu dau vao
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            onChangeText={onChange}
            style={styles.txtInput}
            placeholder="tên sản phẩm"
          />
        )}
        name="title"
      />
      {errors.title && (
        <Text style={styles.txtError}>{errors.title.message}</Text>
      )}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            onChangeText={onChange}
            style={styles.txtInput}
            placeholder="giá sản phẩm"
          />
        )}
        name="price"
      />
      {errors.price && (
        <Text style={styles.txtError}>{errors.price.message}</Text>
      )}
      {/* <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            onChangeText={onChange}
            style={styles.txtInput}
            placeholder="hình ảnh"
          />
        )}
        name="image"
      />
      {errors.image && (
        <Text style={styles.txtError}>{errors.image.message}</Text>
      )} */}
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
      )}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            onChangeText={onChange}
            style={styles.txtInput}
            placeholder="description"
          />
        )}
        name="description"
      />
      {errors.description && (
        <Text style={styles.txtError}>{errors.description.message}</Text>
      )}
      <Button onPress={handleSubmit(onSubmit)} title="Create"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  button: {
    backgroundColor: "rgb(33, 150, 243)",
    marginLeft: 5,
    padding: 10,
  },
  txtInput: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 5,
    marginBottom: 5,
  },
  txtError: {
    color: "red",
    marginBottom: 5,
  },
});

export default CreateProductScreen;
