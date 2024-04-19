import { StyleSheet } from "react-native";
import shadow from "../../utils/styles/shadow";

const browseItemStyles = StyleSheet.create({
  cardContainer: {
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

const styles = StyleSheet.create({
  ...browseItemStyles,
});

export default styles;
