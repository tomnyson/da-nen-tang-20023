import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Image } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import CreateProductScreen from "./screens/CreateProductScreen";
import { db } from "./firebaseConfig";
import { API_URL } from "@env";

const HomeStack = createNativeStackNavigator();
const AdminStack = createNativeStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="Detail" component={DetailScreen} />
  </HomeStack.Navigator>
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
  useEffect(() => {
    const productRef = db.collection("products");
    console.log("productRef", productRef);
    productRef.get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("All data in 'books' collection", data);
    });
  }, []);

  return (
    <NavigationContainer>
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
            return <AntDesign name="pluscircleo" size={24} color={color} />;
          },
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Homes" component={HomeStackScreen} />
        <Tab.Screen name="Admin" component={AdminStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
