import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity, View } from "react-native";
import CustomIcon from "../../CustomIcon";
import SearchBar from "../../SearchBar";
import styles from "./styles";
import { useAppTheme } from "../../../utils/themes";

const Header = () => {
  const { colors } = useAppTheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <SearchBar />
        <TouchableOpacity style={{ padding: 8 }}>
          <CustomIcon
            family="Ionicons"
            name="cart-outline"
            color={colors.text}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;
