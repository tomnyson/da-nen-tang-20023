import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const ProductItem = ({ item, onGoDetail }) => {
  return (
    <View style={{ flex: 1, marginVertical: 5, marginHorizontal: 5 }}>
      <Image
        style={{ width: "100%", height: 100 }}
        source={
          item?.image
            ? {
                uri: item?.image,
              }
            : require("../assets/image-404.jpeg")
        }
      />
      <Text numberOfLines={2} style={styles.title}>
        {item.title}
      </Text>
      <View>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <Text>quantity: {item.quantity}</Text>
      <Button title="Buy" onPress={() => onGoDetail(item)}></Button>
    </View>
  );
};
const ProductListView = ({ products, onHandleSearch, navigation }) => {
  const [keyword, setKeyword] = useState("");
  const onGoDetail = (item) => {
    navigation.navigate("Detail", { detail: item });
  };

  return (
    <FlatList
      ItemSeparatorComponent={
        Platform.OS == "android" &&
        (({ highlighted }) => <View style={[styles.separat]} />)
      }
      ListHeaderComponent={
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setKeyword(text)}
            placeholder="what are you looking for?"
          />
          <TouchableOpacity onPress={() => onHandleSearch(keyword)}>
            <AntDesign
              name="search1"
              size={24}
              style={{ marginTop: "80%" }}
              color="blue"
            />
          </TouchableOpacity>
        </View>
      }
      ListFooterComponent={
        <View>
          <Text>Footer here</Text>
        </View>
      }
      data={products}
      renderItem={({ item }) => (
        <ProductItem onGoDetail={onGoDetail} item={item} />
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default ProductListView;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    height: 50,
  },
  price: {
    fontWeight: "bold",
    color: "red",
  },
  separator: {
    borderBottomColor: "#000",
    borderBottomWidth: 2,
    margin: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    flex: 1,
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 5,
    marginRight: 5,
  },
  button: {},
});
