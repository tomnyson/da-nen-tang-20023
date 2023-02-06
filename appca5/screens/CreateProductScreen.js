import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Picker from "@react-native-picker/picker";
const CreateProductScreen = () => {
  /*
      "title": "Tempora unde assumenda accusantium ullam.",
            "description": "Voluptatibus fuga repudiandae eveniet hic. Corrupti itaque veniam. Quas nemo optio beatae. Sunt a voluptatum dolor nisi vitae laudantium. Qui tempore voluptates quo quasi minima qui. Nemo officia ab minus molestias voluptatibus dolorem ratione excepturi deleniti.",
            "price": 57988.05,
            "image": "https://loremflickr.com/640/480",
            "category": "asperiores",
            "discount": 72,
            "quantity": 64063,
    */
  return (
    <View style={styles.container}>
      <TextInput style={styles.txtInput} placeholder="tên sản phẩm" />
      <TextInput style={styles.txtInput} placeholder="hình ảnh" />
      <TextInput
        onChangeText={(value) => {
          onHandleChange("price", value);
        }}
        style={styles.txtInput}
        keyboardType="numberic"
        placeholder="giá"
      />
      <Picker
        // selectedValue={"java"}
        style={{ height: 50, width: 150 }}
        // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      <TextInput
        style={styles.txtInput}
        placeholder="số lương"
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.txtInput}
        placeholder="discount"
        keyboardType="number-pad"
      />
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={styles.txtInput}
        placeholder="mô tả"
      />
      <Button title="Create"></Button>
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
