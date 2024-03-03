import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProtectedNavigator from "./src/navigators/protected";
import PublicNavigator from "./src/navigators/public";
import { DarkTheme, LightTheme } from "./src/utils/themes";

const Stack = createNativeStackNavigator();

export default function App() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? DarkTheme : LightTheme;

  let isLoggedIn = true;

  return (
    <NavigationContainer theme={theme}>
      {isLoggedIn ? <ProtectedNavigator /> : <PublicNavigator />}
    </NavigationContainer>
  );
}

