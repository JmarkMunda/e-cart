import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IContainer } from "./types";

/**
 * A component that provides padding to its children based on the safe area insets.
 *
 * @param children - The children to be padded
 * @param contentContainerStyle - Additional styles to apply to the content container
 */

const Container = ({ children, contentContainerStyle }: IContainer) => {
  const { bottom, top } = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          flex: 1,
          // paddingTop: top,
          // paddingBottom: bottom,
          paddingHorizontal: 16,
        },
        contentContainerStyle,
      ]}>
      {children}
    </View>
  );
};

export default Container;
