import { View, Text, Button as RNButton } from "react-native";
import React from "react";
import { IButton } from "./types";

const Button = ({ ...rest }: IButton) => {
  return <RNButton {...rest} />;
};

export default Button;
