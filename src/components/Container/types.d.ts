import React from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface IContainer {
  children: React.ReactNode;
  useSafeArea?: boolean;
  contentContainerStyle?: StyleProp<ViewStyle>;
}
