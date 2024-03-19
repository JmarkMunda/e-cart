import React from "react";
import { View, TextInput } from "react-native";
import { Text } from "react-native-paper";
import { styles } from "./styles";
import CustomIcon from "../CustomIcon";
import { useAppTheme } from "../../utils/themes";

const SearchBar = () => {
  const { colors } = useAppTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.card }]}>
      <CustomIcon
        family="Ionicons"
        name="search-outline"
        color={colors.border}
      />
      <TextInput
        placeholder="Search for products"
        style={{ color: colors.text }}
      />
    </View>
  );
};

export default SearchBar;
