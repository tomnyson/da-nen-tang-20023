import { useState } from "react";
import { TextInput, View, StyleSheet, Button, Alert } from "react-native";
import axios from "axios";
import { API } from "../const";
const CreateProductScreen = () => {
  const [product, setProduct] = useState({});
  const onHandleChange = (name, value) => {
    setProduct({ ...product, [name]: value });
  };
  const onSubmit = async () => {
    const response = await axios.post(API, product);
    if (response.status === 201) {
      Alert.alert("message","thêm thành công")
    }
  };
  // validate du lieu dau vao
  console.log("product", JSON.stringify(product));
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(value) => {
          onHandleChange("name", value);
        }}
        style={styles.txtInput}
        placeholder="tên sản phẩm"
      />
      <TextInput
        onChangeText={(value) => {
          onHandleChange("image", value);
        }}
        style={styles.txtInput}
        placeholder="hình ảnh"
      />
      <TextInput
        onChangeText={(value) => {
          onHandleChange("price", value);
        }}
        style={styles.txtInput}
        keyboardType="numberic"
        placeholder="giá"
      />
      <TextInput
        onChangeText={(value) => {
          onHandleChange("quantity", value);
        }}
        style={styles.txtInput}
        placeholder="số lương"
        keyboardType="number-pad"
      />
      <TextInput
        multiline={true}
        numberOfLines={4}
        onChangeText={(value) => {
          onHandleChange("description", value);
        }}
        style={styles.txtInput}
        placeholder="mô tả"
      />
      <Button onPress={onSubmit} title="Create"></Button>
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
});

export default CreateProductScreen;
