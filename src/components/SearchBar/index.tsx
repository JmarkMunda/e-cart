import React from "react";
import { View, TextInput } from "react-native";
import { Text } from "react-native-paper";
import { styles } from "./styles";
import CustomIcon from "../CustomIcon";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <CustomIcon family="Ionicons" name="search-outline" />
      <TextInput placeholder="Search for products" />
    </View>
  );
};

export default SearchBar;
