import React from "react";
import { Text as RNText } from "react-native";
import { IText } from "./types";
import { typography } from "../../utils/styles/typography";

const Text = ({
  children,
  variant = "paragraph",
  color,
  styles,
  ...props
}: IText) => {
  return (
    <RNText style={[typography[variant], { color }, styles]} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
