import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IContainer } from "./types";

const Container = ({ children, contentContainerStyle }: IContainer) => {
  const { bottom, left, right, top } = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          paddingTop: top,
          paddingBottom: bottom,
          paddingLeft: left,
          paddingRight: right,
        },
      ]}>
      <View style={contentContainerStyle}>{children}</View>
    </View>
  );
};

export default Container;
