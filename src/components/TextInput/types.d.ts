import React from "react";
import { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";

export interface ITextInput extends TextInputProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  renderIcon?: () => React.ReactNode;
  hasError?: boolean;
  disabled?: boolean;
  containerStyles?: StyleProp<ViewStyle>;
  labelStyles?: StyleProp<TextStyle>;
  inputStyles?: StyleProp<TextStyle>;
}
