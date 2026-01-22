import { ButtonProps, StyleProp, ViewStyle } from "react-native";

export interface IButton extends ButtonProps {
  children?: string | React.ReactNode;
  styles?: StyleProp<ViewStyle>;
}
