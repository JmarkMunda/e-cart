import React from "react";
import { View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { products } from "../../../utils/data";
import { IBrowseItem } from "../utils/types";
import BrowseItem from "./BrowseItem";
import Text from "../../../components/Text";
import Banner from "./Banner";
import CustomIcon from "../../../components/CustomIcon";
import SectionHeader from "../../../components/Header/SectionHeader";

const BrowseList = () => {
  const renderHeader = () => (
    <>
      <View style={{ marginBottom: 24 }}>
        <SectionHeader
          label="FEATURED"
          leftIcon={{
            family: "MaterialCommunityIcons",
            name: "star-shooting",
            color: "orange",
          }}
        />
        <Banner />
      </View>
      <SectionHeader
        label="HOT"
        leftIcon={{
          family: "MaterialIcons",
          name: "local-fire-department",
          color: "orange",
        }}
        rightButton={{ label: "See All" }}
      />
    </>
  );

  const renderItem = ({ item, index }: IBrowseItem) => (
    <BrowseItem item={item} index={index} />
  );

  return (
    <View style={{ minHeight: 2, flex: 1 }}>
      <FlashList
        data={products}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        estimatedItemSize={200}
        numColumns={2}
      />
    </View>
  );
};

export default BrowseList;
