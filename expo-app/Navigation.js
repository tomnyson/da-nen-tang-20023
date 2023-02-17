import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Image } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import CreateProductScreen from "./screens/CreateProductScreen";
import { db, auth } from "./firebaseConfig";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import UserProfileScreen from "./screens/UserProfileScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CartScreen from "./screens/CartScreen";

const HomeStack = createNativeStackNavigator();
const AdminStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator initialRouteName="Home">
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="Login" component={LoginScreen} />
  </HomeStack.Navigator>
);

const AuthStackScreen = () => (
  <AuthStack.Navigator initialRouteName="Login">
    <AuthStack.Screen name="Register" component={RegisterScreen} />
    <AuthStack.Screen name="Login" component={LoginScreen} />
  </AuthStack.Navigator>
);

const AdminStackScreen = () => (
  <AdminStack.Navigator>
    <AdminStack.Screen name="Create" component={CreateProductScreen} />
  </AdminStack.Navigator>
);

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require("./assets/favicon.png")}
    />
  );
}
const Tab = createBottomTabNavigator();
const Navigation = () => {
  // useEffect(() => {
  //   const productRef = db.collection("products");
  //   console.log("productRef", productRef);
  //   productRef.get().then((snapshot) => {
  //     const data = snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     console.log("All data in 'books' collection", data);
  //   });
  // }, []);

  const [isLogin, setIsLogin] = useState(null);
  useEffect(() => {
    const authUnsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // user is signed in, trigger login
        setIsLogin(user);
      } else {
        // user is not signed in, triggered logout
        setIsLogin(undefined);
      }
    });

    // unsubscribe from authentication listener
    return () => authUnsubscribe();
  }, []);

  const LoggedScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              return <AntDesign name="home" size={24} color={color} />;
            }
            if (route.name === "Detail") {
              return <AntDesign name="profile" size={24} color={color} />;
            }
            if (route.name === "Profile") {
              return <AntDesign name="setting" size={24} color={color} />;
            }
            if (route.name === "Cart") {
              return <AntDesign name="shoppingcart" size={24} color={color} />;
            }
            return <AntDesign name="pluscircleo" size={24} color={color} />;
          },
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeStackScreen}
        />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Profile"
          component={UserProfileScreen}
        />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      {isLogin ? <LoggedScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};
export default Navigation;
