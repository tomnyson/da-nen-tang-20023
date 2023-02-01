import { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import { ScrollView, Text, ActivityIndicator     } from "react-native";
const PostList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API = "https://61a5e3c48395690017be8ed2.mockapi.io/blogs/products";

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const response = await axios.get(API);
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
      <ScrollView>
        {products.map((product) => {
          return <ProductItem key={product.id} item={product} />;
        })}
      </ScrollView>
    );
  }
  return <Text>no data</Text>;
};

export default PostList;
