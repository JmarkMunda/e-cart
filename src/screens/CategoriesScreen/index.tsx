import React from "react";
import Container from "../../components/Container";
import { Text } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

const CategoriesScreen = () => {
  const headerHeight = useHeaderHeight();

  return (
    <Container
      contentContainerStyle={{
        paddingTop: headerHeight,
      }}>
      <Text>Categories Screen</Text>
    </Container>
  );
};

export default CategoriesScreen;
