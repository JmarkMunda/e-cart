import React from "react";
import { Image, Pressable, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { IProductCard } from "./type";
import { useAppTheme } from "../../utils/themes";
import styles from "./styles";
import CustomIcon from "../CustomIcon";
import Text from "../Text";

const ProductCard = ({ item, index }: IProductCard) => {
  const { colors } = useAppTheme();

  return (
    <TouchableOpacity
      style={[
        styles.cardContainer,
        { backgroundColor: colors.card },
        index % 2 === 0 ? { marginRight: 8 } : { marginLeft: 8 },
      ]}
    >
      {/* SAVE BUTTON */}
      <TouchableOpacity style={[styles.cardSaveBtn, { backgroundColor: colors.background }]}>
        <CustomIcon family="FontAwesome" name="heart-o" color={colors.text} />
      </TouchableOpacity>
      {/* IMAGE */}
      <View style={styles.cardImageContainer}>
        <Image src={item.thumbnail} style={styles.cardImage} />
        {/* RATING */}
        <View style={[styles.cardRating, { backgroundColor: colors.background }]}>
          <CustomIcon family="AntDesign" name="star" size={12} color={colors.text} />
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
        style={styles.cardTextContainer}
      >
        <View style={{ flex: 1, gap: 4 }}>
          <Text variant="paragraphBold" numberOfLines={2} color={colors.text}>
            {item?.title}
          </Text>
          <Text variant="description" color={colors.text}>
            P{item?.price}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ProductCard;
