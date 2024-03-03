import React from "react";
import { View, Text } from "react-native";
import Container from "../../components/Container";
import { useHeaderHeight } from "@react-navigation/elements";

const HomeScreen = () => {
  const headerHeight = useHeaderHeight();

  return (
    <Container
      contentContainerStyle={{
        paddingTop: headerHeight,
      }}>
      <Text>Home Screen</Text>
    </Container>
  );
};

export default HomeScreen;
