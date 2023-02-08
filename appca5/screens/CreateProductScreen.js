import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  //   Picker,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

const CreateProductScreen = () => {
  const categories = ["samsung", "apple", "oppo", "vinsmart"];
  const [selected, setSelected] = useState(categories[0]);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      image: "",
      price: 0,
      quantity: 0,
      discount: 0,
      description: "",
      category: "samsung",
    },
  });
  const API = "https://61a5e3c48395690017be8ed2.mockapi.io/blogs/products";
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(API, data);
      if (response.status === 201) {
        Alert.alert("Success", "tạo thành công");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            style={[styles.txtInput, errors.title && styles.inputError]}
            onChangeText={onChange}
            placeholder="tên sản phẩm"
            value={value}
          />
        )}
        name="title"
      ></Controller>
      {errors.title && <Text style={styles.txtError}>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            style={[styles.txtInput, errors.image && styles.inputError]}
            onChangeText={onChange}
            placeholder="hình ảnh"
            value={value}
          />
        )}
        name="image"
      ></Controller>
      {errors.image && <Text style={styles.txtError}>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            style={[styles.txtInput, errors.price && styles.inputError]}
            onChangeText={onChange}
            defaultValue={value}
            placeholder="giá"
            value={value}
          />
        )}
        name="price"
      ></Controller>
      {errors.price && <Text style={styles.txtError}>This is required.</Text>}
      <Picker
        selectedValue={selected}
        style={{ height: 50, width: 150 }}
        onValueChange={setSelected}
      >
        {categories.map((category) => {
          return (
            <Picker.Item key={category} label={category} value={category} />
          );
        })}
      </Picker>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            style={[styles.txtInput, errors.quantity && styles.inputError]}
            onChangeText={onChange}
            placeholder="giá"
            value={value}
          />
        )}
        name="quantity"
      ></Controller>
      {errors.quantity && (
        <Text style={styles.txtError}>This is required.</Text>
      )}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            style={[styles.txtInput, errors.discount && styles.inputError]}
            onChangeText={onChange}
            placeholder="discount"
            value={value}
            defaultValue={value}
          />
        )}
        name="discount"
      ></Controller>
      {errors.discount && (
        <Text style={styles.txtError}>This is required.</Text>
      )}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            style={[styles.txtInput, errors.description && styles.inputError]}
            onChangeText={onChange}
            placeholder="description"
            value={value}
          />
        )}
        name="description"
      ></Controller>
      {errors.description && (
        <Text style={styles.txtError}>This is required.</Text>
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
    fontSize: 12,
    marginBottom: 5,
    color: "red",
  },
  inputError: {
    borderColor: "red",
  },
});
export default CreateProductScreen;
