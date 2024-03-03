import {
  DefaultTheme as RNLightTheme,
  DarkTheme as RNDarkTheme,
} from "@react-navigation/native";

const LightScheme = {
  colors: {
    primary: "rgb(238, 240, 142)",
    background: "rgb(255, 255, 255)",
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

const LightTheme = {
  ...RNLightTheme,
  colors: {
    ...RNLightTheme.colors,
    ...LightScheme.colors,
  },
};

const DarkTheme = {
  ...RNDarkTheme,
  colors: {
    ...RNDarkTheme.colors,
    ...DarkScheme.colors,
  },
};

export { LightTheme, DarkTheme };
