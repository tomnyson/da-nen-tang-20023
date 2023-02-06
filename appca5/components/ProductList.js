import { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import {
  ScrollView,
  Text,
  ActivityIndicator,
  SafeAreaView,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import SearchProduct from "./SearchProduct";
import { AntDesign } from "@expo/vector-icons";
import ListView from "./ListView";

const PostList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API = "https://61a5e3c48395690017be8ed2.mockapi.io/blogs/products";
  const [keyword, setKeyword] = useState(undefined);

  useEffect(() => {
    console.log("render post");
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      let response;
      if (!keyword) {
        response = await axios.get(API);
      } else {
        response = await axios.get(`${API}?search=${keyword}`);
      }

      if (response.status === 200) {
        setProducts(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }
  if (products.length > 0) {
    return (
      <SafeAreaView>
        <View style={styles.wrapperSearch}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setKeyword(text)}
            placeholder="what are you looking for?"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              fetchPost();
            }}
          >
            <AntDesign name="search1" size={24} color="blue" />
          </TouchableOpacity>
        </View>
        <ListView data={products} />
        {/* <ScrollView style={{ padding: 5 }}>
          {products.map((product) => {
            return <ProductItem key={product.id} item={product} />;
          })}
        </ScrollView> */}
      </SafeAreaView>
    );
  }
  return (
    <View>
      <View style={styles.wrapperSearch}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setKeyword(text)}
          placeholder="what are you looking for?"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            fetchPost();
          }}
        >
          <AntDesign name="search1" size={24} color="blue" />
        </TouchableOpacity>
      </View>
      <Text>no data</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
  wrapperSearch: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
export default PostList;
