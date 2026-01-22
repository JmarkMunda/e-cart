import { useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProtectedNavigator from "./src/navigators/protected";
import PublicNavigator from "./src/navigators/public";
import { CombinedDarkTheme, CombinedDefaultTheme } from "./src/utils/themes";
import { PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useStore } from "./src/store";

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? CombinedDarkTheme : CombinedDefaultTheme;
  const isLoggedIn = useStore((state) => state.isLoggedIn);

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          {isLoggedIn ? <ProtectedNavigator /> : <PublicNavigator />}
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
}
