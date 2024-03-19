import { Dimensions, StyleSheet } from "react-native";
import shadow from "../../../utils/styles/shadow";

const SCREEN_WIDTH = Dimensions.get("screen").width;
const SCREEN_HEIGHT = Dimensions.get("screen").height;

const browseItemStyles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#ffffff", // TODO: replace this
    height: 250,
    flex: 1,
    borderRadius: 16,
    marginVertical: 16,
    position: "relative",
    ...shadow.shadowSm,
  },
  cardSaveBtn: {
    position: "absolute",
    top: 8,
    right: 8,
    zIndex: 2,
    backgroundColor: "rgba(255,255,255, 0.9)",
    padding: 8,
    borderRadius: 99,
  },
  cardImageContainer: {
    height: "60%",
    position: "relative",
  },
  cardImage: {
    height: "100%",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    objectFit: "cover",
  },
  cardRating: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
    flexDirection: "row",
    gap: 4,
    padding: 4,
    borderRadius: 8,
  },
  cardTextContainer: {
    padding: 16,
    flex: 1,
    gap: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
});

const bannerStyles = StyleSheet.create({
  bannerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    height: SCREEN_HEIGHT / 5,
    marginVertical: 16,
  },
  bannerButton: {
    alignSelf: "flex-start",
    borderRadius: 99,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderWidth: 1,
    borderColor: "rgb(255,255,255)",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
});

const styles = StyleSheet.create({
  ...browseItemStyles,
  ...bannerStyles,
});

export default styles;
