import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Image } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import CreateProductScreen from "./screens/CreateProductScreen";
const Stack = createNativeStackNavigator();

const Test = () => {
  return (
    <View>
      <Text>home page</Text>
    </View>
  );
};

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
            //<AntDesign name="pluscircleo" size={24} color="black" />
            return <AntDesign name="pluscircleo" size={24} color={color} />;
          },
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Detail" component={DetailScreen} />
        <Tab.Screen name="Create" component={CreateProductScreen} />
      </Tab.Navigator>
      {/* <Stack.Navigator
        screenOptions={{
          title: "My home",
          //   headerTitle: (props) => <LogoTitle {...props} />,
          headerStyle: {
            backgroundColor: "green",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            title: "My home",
            headerStyle: {
              backgroundColor: "red",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};
export default Navigation;
