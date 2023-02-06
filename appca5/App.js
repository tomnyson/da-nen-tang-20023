import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/ProductDetailScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreateProductScreen from "./screens/CreateProductScreen";
// const Stack = createNativeStackNavigator();

// const Root = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={PostScreen} />
//         <Stack.Screen name="Detail" component={DetailScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
const TabBottom = createBottomTabNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <TabBottom.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case "Home":
                iconName = "home";
                break;
              case "Detail":
                iconName = "post";
                break;
              case "Create":
                iconName = "plus";
                break;
              default:
                iconName = "home";
                break;
            }

            // You can return any component that you like here!
            return (
              <MaterialCommunityIcons name={iconName} size={24} color={color} />
            );
          },
          tabBarLabel: () => {
            return null;
          },
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <TabBottom.Screen name="Home" component={PostScreen} />
        <TabBottom.Screen name="Detail" component={DetailScreen} />
        <TabBottom.Screen name="Create" component={CreateProductScreen} />
      </TabBottom.Navigator>
    </NavigationContainer>
  );
};
export default Root;
