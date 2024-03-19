import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import Text from "../../../components/Text";
import styles from "../utils/styles";
import { nikeAirMax } from "../../../../assets/images";
import { LinearGradient } from "expo-linear-gradient";

const Banner = () => {
  return (
    <LinearGradient
      colors={["#83b2f0", "#d4d2fc"]}
      start={[0.3, 0.5]}
      style={styles.bannerContainer}>
      <View style={{ flex: 1, gap: 4 }}>
        <View style={{ marginVertical: 8 }}>
          <Text color="white">New collection</Text>
          <Text variant="titleBold" color="white">
            Nike Air Max
          </Text>
        </View>

        <TouchableOpacity style={styles.bannerButton}>
          <Text variant="description" color="white">
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
