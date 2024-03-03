import React from "react";
import { Text } from "react-native";
import Container from "../../components/Container";
import { useHeaderHeight } from "@react-navigation/elements";

const SettingsScreen = () => {
  const headerHeight = useHeaderHeight();

  return (
    <Container
      contentContainerStyle={{
        paddingTop: headerHeight,
      }}>
      <Text>Settings Screen</Text>
    </Container>
  );
};

export default SettingsScreen;
