import React from "react";
import { Image, View } from "react-native";
import { IBrowseItem } from "../utils/types";
import Text from "../../../components/Text";
import CustomIcon from "../../../components/CustomIcon";
import styles from "../utils/styles";
import { LinearGradient } from "expo-linear-gradient";

const BrowseItem = ({ item, index }: IBrowseItem) => {
  return (
    <View
      // onLayout={(e) => console.log(e.nativeEvent.layout.height)}
      style={[
        styles.cardContainer,
        index % 2 === 0 ? { marginRight: 8 } : { marginLeft: 8 },
      ]}>
      {/* SAVE BUTTON */}
      <View style={styles.cardSaveBtn}>
        <CustomIcon family="AntDesign" name="hearto" />
      </View>
      {/* IMAGE */}
      <View style={styles.cardImageContainer}>
        <Image src={item.thumbnail} style={styles.cardImage} />
        <View style={styles.cardRating}>
          <CustomIcon family="AntDesign" name="star" size={12} />
          <Text variant="small">{item?.rating}</Text>
        </View>
      </View>
      {/* TEXT DETAILS */}
      <LinearGradient
        colors={["rgb(255, 255, 255)", "rgba(255, 255, 255, 0.5)"]}
        end={{ x: 0.5, y: 1 }}
        locations={[0.8, 0]}
        style={styles.cardTextContainer}>
        <View style={{ flex: 1, gap: 4 }}>
          <Text variant="paragraphBold" numberOfLines={2}>
            {item?.title}
          </Text>
          <Text variant="description">P{item?.price}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default BrowseItem;
