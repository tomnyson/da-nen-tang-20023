import { View, Text, StyleSheet, Image, Button } from "react-native";
const Product = (props) => {
  return (
    <View>
      <Image
        style={{ width: "100%", height: 300, resizeMode: "contain" }}
        source={{
          uri: props.item.image,
        }}
      />
      <Text style={styles.title}>{props.item.title}</Text>
      <View>
        <Text style={styles.price}>{props.item.price}</Text>
      </View>
      <Text>quantity: {props.item.quantity}</Text>
      <Button title="Buy"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
  },
  price: {
    fontWeight: "bold",
    color: "red",
  },
});
export default Product;
