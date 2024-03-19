import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { nikeAirMax } from "../../../../assets/images";
import { LinearGradient } from "expo-linear-gradient";
import { useAppTheme } from "../../../utils/themes";
import Text from "../../../components/Text";
import styles from "../utils/styles";

const Banner = () => {
  const { colors, dark } = useAppTheme();

  return (
    <LinearGradient
      colors={["#83b2f0", "#d4d2fc"]}
      start={[0.3, 0.5]}
      style={styles.bannerContainer}>
      <View style={{ flex: 1, gap: 4 }}>
        <View style={{ marginVertical: 8 }}>
          <Text color={colors.background}>New collection</Text>
          <Text variant="titleBold" color={colors.background}>
            Nike Air Max
          </Text>
        </View>

        <TouchableOpacity
          style={[
            styles.bannerButton,
            {
              borderColor: colors.background,
              backgroundColor: !dark
                ? "rgba(255, 255, 255, 0.5)"
                : "rgba(0, 0, 0, 0.5)",
            },
          ]}>
          <Text variant="descriptionBold" color={colors.background}>
            Shop Now
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <Image source={nikeAirMax} style={{ width: 200, flex: 1 }} />
      </View>
    </LinearGradient>
  );
};

export default Banner;
