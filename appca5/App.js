import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/ProductDetailScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreateProductScreen from "./screens/CreateProductScreen";
import { DataContext } from "./context";
import { config } from "./const";
import { getAuth } from "firebase/auth";
import { Alert } from "react-native";
import { getApps, initializeApp } from "firebase/app";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ResetPassword from "./screens/ResetPasswordScreen";

if (!getApps().length) {
  initializeApp(config);
}

const AuthStack = createNativeStackNavigator();
function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

const HomeStack = () => {
  return (
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
      <TabBottom.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={PostScreen}
      />
      <TabBottom.Screen name="Create" component={CreateProductScreen} />
      <TabBottom.Screen name="Profile" component={CreateProductScreen} />
    </TabBottom.Navigator>
  );
};

const TabBottom = createBottomTabNavigator();

const Root = () => {
  const theme = {
    color: "green",
  };

  const showMessage = (message = "") => {
    Alert.alert(null, message);
  };

  const [isLogin, setIsLogin] = useState(null);

  useEffect(() => {
    const authUnsubscribe = getAuth().onAuthStateChanged((user) => {
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
  const isLoggedIn = AsyncStorage.getItem("auth");

  const AuthScreen = () => {
    return (
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Register" component={RegisterScreen} />
        <AuthStack.Screen name="Reset" component={ResetPassword} />
        {isLoggedIn && <AuthStack.Screen name="Home" component={HomeStack} />}
      </AuthStack.Navigator>
    );
  };

  return (
    <DataContext.Provider value={{ theme, handleEvent: showMessage }}>
      <NavigationContainer>
        <AuthScreen />
      </NavigationContainer>
    </DataContext.Provider>
  );
};
export default Root;
