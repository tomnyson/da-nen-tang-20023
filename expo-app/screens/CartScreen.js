import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Button,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export default function CartScreen() {
  const carts = [
    { name: "Apple", id: 1, quantity: 2, price: 2.5 },
    { name: "Orange", id: 2, quantity: 1, price: 1.5 },
  ];
  const sum = carts.reduce(
    (previous, item) => previous + item.price * item.quantity,
    0
  );
  const Footer = () => {
    return (
      <View>
        <View style={{ display: "flex", flexDirection: "row-reverse" }}>
          <Text>{sum + ""} $</Text>
          <Text style={{ fontWeight: "bold" }}>SUM:</Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#1e81b0",
            alignItems: "center",
            marginVertical: "5%",
            marginHorizontal: "15%",
          }}
        >
          <TouchableOpacity style={{ padding: 10, textAlign: "center" }}>
            <Text
              style={{
                textAlign: "center",
                color: "#fff",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { name: "Apple", quantity: 2, price: 2.5 },
          { name: "Orange", quantity: 1, price: 1.5 },
        ]}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/tns-sendotp.appspot.com/o/images%2F1676460635684.png?alt=media&token=c12e0055-a536-4355-8745-1afe0134815a",
              }}
              style={{ width: 100, height: 80 }}
              resizeMode="contain"
            />
            <View>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text>Quantity: {item.quantity}</Text>
              <Text>Price: ${item.price}</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                width: 100,
              }}
            >
              <TouchableOpacity>
                <AntDesign name="pluscircleo" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name="minuscircleo" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <AntDesign name="close" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListFooterComponent={<Footer />}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  listItem: {
    paddingHorizontal: 5,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    width: "100%",
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
