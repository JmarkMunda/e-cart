import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import {
  adaptNavigationTheme,
  MD3DarkTheme,
  MD3LightTheme,
} from "react-native-paper";

const LightScheme = {
  colors: {
    primary: "rgb(238, 240, 142)",
    background: "rgb(240, 240, 240)",
    card: "rgb(226, 226, 226)",
    text: "rgb(29, 29, 29)",
    border: "rgb(95, 95, 95)",
    notification: "rgb(253, 193, 193)",
  },
};

const DarkScheme = {
  colors: {
    primary: "rgb(248, 252, 56)",
    background: "rgb(29, 29, 29)",
    card: "rgb(71, 71, 71)",
    text: "rgb(255, 255, 255)",
    border: "rgb(197, 197, 197)",
    notification: "rgb(247, 83, 83)",
  },
};

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
    ...LightScheme.colors, // custom colors
  },
};
const CombinedDarkTheme = {
  ...MD3DarkTheme,
  ...DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...DarkTheme.colors,
    ...DarkScheme.colors, // custom colors
  },
};

export { CombinedDefaultTheme, CombinedDarkTheme };
