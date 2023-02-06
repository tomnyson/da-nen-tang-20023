import { View, Text, FlatList } from "react-native";
import ProductItem from "./ProductItem";
const ListView = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ProductItem item={item} />}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};
export default ListView;
