import { TextInput, View, StyleSheet, Text } from "react-native";

const SearchProduct = () => {
  <View>
    <Text>Search here</Text>
    <TextInput style={styles.input} placeholder="what are you looking for?" />;
  </View>;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default SearchProduct;
