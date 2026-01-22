import React from "react";
import { ScrollView, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { products } from "../../../utils/data";
import { IBrowseItem } from "../utils/types";
import Banner from "./Banner";
import SectionHeader from "../../../components/Header/SectionHeader";
import ProductCard from "../../../components/ProductCard";
import styles from "../utils/styles";

const BrowseList = () => {
  const renderHeader = () => (
    <>
      <View style={styles.listHeader}>
        <SectionHeader
          label="FEATURED"
          leftIcon={{
            family: "MaterialCommunityIcons",
            name: "star-shooting",
            color: "orange",
          }}
        />
        <ScrollView horizontal>
          <Banner />
        </ScrollView>
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

  const renderItem = ({ item, index }: IBrowseItem) => <ProductCard item={item} index={index} />;

  return (
    <View style={[styles.listContainer]}>
      <FlashList
        data={products}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default BrowseList;
