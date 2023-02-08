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
} from "react-native";
import axios from "axios";
import { API } from "../const";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    title: yup.string().required(),
    price: yup
      .number()
      .positive("price must greater than 0")
      .integer()
      .required(),
    image: yup.string().required(),
    description: yup.string().required(),
  })
  .required();

const CreateProductScreen = () => {
  const [product, setProduct] = useState({});
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
    const response = await axios.post(API, data);
    if (response.status === 201) {
      reset({
        data: {
          title: "",
          price: 0,
          image: "",
          description: "",
        },
      });
      if (Platform.OS === "android") {
        ToastAndroid.show("thêm thành công !", ToastAndroid.SHORT);
      } else {
        Alert.alert("message", "thêm thành công");
      }
    }
  };
  // validate du lieu dau vao
  console.log("product", JSON.stringify(product));
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
      <Controller
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
