import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import icon from "./assets/MainMenuBG.png";
import Profile from "./components/Profile";
import { styles } from "./styles";
import UserProfile from "./components/UserProfile";
import axios from "axios";
import Product from "./components/Product.js";
import { View, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import ProductListView from "./components/ProductListView";
import Navigation from "./Navigation";
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
export default function App() {
  return <Navigation />;
}
