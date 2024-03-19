import React from "react";
import Container from "../../components/Container";
import { useHeaderHeight } from "@react-navigation/elements";
import BrowseList from "./components/BrowseList";

const HomeScreen = () => {
  const headerHeight = useHeaderHeight();

  return (
    <Container
      contentContainerStyle={{
        paddingTop: headerHeight,
      }}>
      <BrowseList />
    </Container>
  );
};

export default HomeScreen;
