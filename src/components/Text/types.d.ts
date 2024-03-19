import { StyleProp, TextProps, TextStyle } from "react-native";
import { typography } from "../../utils/styles/typography";

export interface IText extends TextProps {
  variant?: keyof typeof typography;
  children?: string | React.ReactNode;
  color?: string;
  styles?: StyleProp<TextStyle>;
}
