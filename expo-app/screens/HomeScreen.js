import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import Profile from "../components/Profile";
import { styles } from "../styles";
import UserProfile from "./UserProfileScreen";
import axios from "axios";
import Product from "../components/Product.js";
import { View, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import ProductListView from "../components/ProductListView";
import { db } from "../firebaseConfig";
/**
 * tên
 * tuổi
 * ngành học
 * sở thích
 * điểm mạnh
 * điểm yếu
 * -> đổi màu cho text
 *  đổi kích thước chữ
 *  border cong 10px
 * border width 3px
 * background: bue
 * dùng style compose xây dựng style riêng cho từng thành phần
 * định nghĩa style màu sẵc [xanh, đỏ, tim]
 * định nghĩa style size chữ [16, 24]
 * định nghĩa style kiểu chữ [ lowercase, uppercase]
 * kết hợp cả 3 lại với nhau
 */
const API = "https://61a5e3c48395690017be8ed2.mockapi.io/blogs/products";

export default function Home({ navigation }) {
  const [diemManh, setDiemManh] = useState("");
  const [diemYeu, setDiemYeu] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const productRef = db.collection("products");

  useEffect(() => {
    console.log("render success");
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    // const response = await axios.get(API);
    // if (response.status === 200) {
    //   setProducts(response.data);
    //   setLoading(false);
    // }
    try {
      const productSnapshot = await productRef.get();
      if (productSnapshot) {
        const data = [];
        productSnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
        setProducts(data);
        setLoading(false);
      }
    } catch (error) {}
  };

  if (loading) {
    return <ActivityIndicator size="large" color="blue" />;
  }
  return (
    <SafeAreaView style={{ marginTop: 30 }}>
      {/* <Profile
        ten="Le Hong Son"
        tuoi={30}
        nganh="CNTT"
        diemManh={diemManh}
        diemYeu={diemYeu}
      /> */}
      {/* <TextInput
        name="diemManh"
        placeholder="nhập điểm mạnh"
        onChangeText={handleChangeTextDiemManh}
      />
      <TextInput
        name="diemYeu"
        onChangeText={handleChangeTextDiemYeu}
        placeholder="nhập điểm yếu"
      /> */}
      {/* <UserProfile /> */}

      {/* <ScrollView style={styles.containerProduct}>
        {products.map((product) => {
          return <Product key={product.id} item={product} />;
        })}
      </ScrollView> */}
      <View>
        <ProductListView
          onHandleSearch={async (value) => {
            const response = await axios.get(`${API}?filter=${value}`);
            if (response.status === 200) {
              setProducts(response.data);
            }
          }}
          navigation={navigation}
          products={products}
        />
      </View>
    </SafeAreaView>
  );
}
