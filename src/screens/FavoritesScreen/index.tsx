import React from "react";
import Container from "../../components/Container";
import { Text } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

const FavoritesScreen = () => {
  const headerHeight = useHeaderHeight();

  return (
    <Container
      contentContainerStyle={{
        paddingTop: headerHeight,
      }}>
      <Text>Favorites Screen</Text>
    </Container>
  );
};

export default FavoritesScreen;
