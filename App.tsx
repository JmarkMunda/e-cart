import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProtectedNavigator from "./src/navigators/protected";
import PublicNavigator from "./src/navigators/public";

const Stack = createNativeStackNavigator();

export default function App() {
  let isLoggedIn = true;

  return (
    <NavigationContainer>
      {isLoggedIn ? <ProtectedNavigator /> : <PublicNavigator />}
    </NavigationContainer>
  );
}

