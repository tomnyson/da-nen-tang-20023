import Product from "../components/Product";
import { View, Text } from "react-native";
const DetailScreen = ({ route, navigation }) => {
  const { detail } = route.params;
  navigation.setOptions({ title: detail.title || "detail" });

  return <Product item={detail} />;
};
export default DetailScreen;
