import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProtectedNavigator from "./src/navigators/protected";
import PublicNavigator from "./src/navigators/public";
import { CombinedDarkTheme, CombinedDefaultTheme } from "./src/utils/themes";
import { PaperProvider } from "react-native-paper";

const Stack = createNativeStackNavigator();

export default function App() {
  const colorScheme = useColorScheme();
  const theme =
    colorScheme === "dark" ? CombinedDarkTheme : CombinedDefaultTheme;

  let isLoggedIn = true;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        {isLoggedIn ? <ProtectedNavigator /> : <PublicNavigator />}
      </NavigationContainer>
    </PaperProvider>
  );
}

