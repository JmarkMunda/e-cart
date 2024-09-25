import {
  StyleSheet,
  TextInput as RNTextInput,
  View,
  Platform,
} from "react-native";
import { useAppTheme } from "../../utils/themes";
import { ITextInput } from "./types";
import React from "react";
import Text from "../Text";
import CustomIcon from "../CustomIcon";

const TextInput = ({
  label,
  value,
  onChangeText,
  renderIcon,
  hasError,
  disabled,
  containerStyles,
  labelStyles,
  inputStyles,
  ...props
}: ITextInput) => {
  const { colors } = useAppTheme();

  return (
    <>
      {label && (
        <Text color={colors.text} styles={labelStyles}>
          {label}
        </Text>
      )}
      <View
        style={[
          { borderColor: hasError ? colors.error : colors.border },
          styles.container,
          containerStyles,
        ]}>
        <View style={styles.left}>
          {renderIcon && renderIcon()}
          <RNTextInput
            value={value}
            onChangeText={onChangeText}
            style={[{ color: colors.text }, styles.input, inputStyles]}
            {...props}
          />
        </View>
        {hasError && (
          <CustomIcon
            family="MaterialIcons"
            name="error-outline"
            color={colors.error}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: Platform.OS === "ios" ? 16 : 8,
    paddingHorizontal: 16,
  },
  left: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  input: {
    flex: 1,
    marginHorizontal: 8,
  },
});

export default TextInput;
