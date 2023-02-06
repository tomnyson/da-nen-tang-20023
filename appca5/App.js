import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostScreen from "./screens/ProductScreen";
import { AntDesign } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-list" : "ios-list-outline";
            }

            // You can return any component that you like here!
            return <AntDesign name="home" size={24} color="red" />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Stack.Screen name="Home" component={PostScreen} />
        <Stack.Screen name="Detail" component={PostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Root;
