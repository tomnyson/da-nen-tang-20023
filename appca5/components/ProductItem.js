import { useContext } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
const ProductItem = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <Image source={{ uri: props.item.image }} style={{ height: 200 }} />
      <Text style={styles.title}>{props.item.title}</Text>
      <Text style={styles.price}>{props.item.price}</Text>
      <Text>quantity: {props.item.quantity}</Text>
      {/* <Text>{props.item.description}</Text> */}
      <Button
        title="detail"
        onPress={() => {
          navigation.navigate("Detail");
        }}
      ></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "green",
    fontWeight: "bold",
  },
  price: {
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
  },
});
export default ProductItem;
