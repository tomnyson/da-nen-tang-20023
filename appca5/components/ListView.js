import { View, Text, FlatList, Alert } from "react-native";
import ProductItem from "./ProductItem";
import axios from "axios";
const API = "https://61a5e3c48395690017be8ed2.mockapi.io/blogs/products";
const ListView = ({ data }) => {
  const onDeleteItem = async (id) => {
    try {
      const response = await axios.delete(API + `/${id}`);
      console.log(response);
      if (response.status === 200) {
        Alert.alert(null, "deleted success ");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ProductItem onDelete={onDeleteItem} item={item} />
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};
export default ListView;
