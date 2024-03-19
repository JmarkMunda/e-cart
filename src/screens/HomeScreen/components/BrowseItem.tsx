import React from "react";
import { Image, View } from "react-native";
import { IBrowseItem } from "../utils/types";
import Text from "../../../components/Text";
import CustomIcon from "../../../components/CustomIcon";
import styles from "../utils/styles";
import { LinearGradient } from "expo-linear-gradient";
import { useAppTheme } from "../../../utils/themes";

const BrowseItem = ({ item, index }: IBrowseItem) => {
  const { colors, dark } = useAppTheme();

  return (
    <View
      // onLayout={(e) => console.log(e.nativeEvent.layout.height)}
      style={[
        styles.cardContainer,
        { backgroundColor: colors.card },
        index % 2 === 0 ? { marginRight: 8 } : { marginLeft: 8 },
      ]}>
      {/* SAVE BUTTON */}
      <View
        style={[styles.cardSaveBtn, { backgroundColor: colors.background }]}>
        <CustomIcon family="AntDesign" name="hearto" color={colors.text} />
      </View>
      {/* IMAGE */}
      <View style={styles.cardImageContainer}>
        <Image src={item.thumbnail} style={styles.cardImage} />
        {/* RATING */}
        <View
          style={[styles.cardRating, { backgroundColor: colors.background }]}>
          <CustomIcon
            family="AntDesign"
            name="star"
            size={12}
            color={colors.text}
          />
          <Text variant="small" color={colors.text}>
            {item?.rating}
          </Text>
        </View>
      </View>
      {/* TEXT DETAILS */}
      <LinearGradient
        colors={[colors.base, colors.blur]}
        end={{ x: 0.5, y: 1 }}
        locations={[0.8, 0]}
        style={styles.cardTextContainer}>
        <View style={{ flex: 1, gap: 4 }}>
          <Text variant="paragraphBold" numberOfLines={2} color={colors.text}>
            {item?.title}
          </Text>
          <Text variant="description" color={colors.text}>
            P{item?.price}
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default BrowseItem;
