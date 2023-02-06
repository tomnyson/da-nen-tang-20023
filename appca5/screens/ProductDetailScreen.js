import { Text } from "react-native";
import ProductItem from "../components/ProductItem";
export default DetailScreen = ({ route, navigation }) => {
  const { item = {} } = route.params;
  console.log(item, item);
  return <ProductItem item={item} />;
};