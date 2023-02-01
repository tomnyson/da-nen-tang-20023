import { View, Text, Image } from "react-native";
const ProductItem = (props) => {
  return (
    <View>
      <Image source={{ uri: props.item.image }} style={{ height: 200 }} />
      <Text>{props.item.title}</Text>
      <Text>{props.item.price}</Text>
      <Text>{props.item.quantity}</Text>
      <Text>{props.item.description}</Text>
    </View>
  );
};
export default ProductItem;
