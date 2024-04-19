import { StyleSheet } from "react-native";
import { SCREEN_HEIGHT } from "../../../utils/constants";

const browseListStyles = StyleSheet.create({
  listContainer: {
    minHeight: 2,
    flex: 1,
  },
  listHeader: {
    marginBottom: 24,
  },
});

const bannerStyles = StyleSheet.create({
  bannerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  ...browseListStyles,
  ...bannerStyles,
});

export default styles;
