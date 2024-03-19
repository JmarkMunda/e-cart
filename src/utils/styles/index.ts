import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  flexCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  flexRow: {
    flexDirection: "row",
  },
  justBetween: {
    justifyContent: "space-between",
  },
  justEven: {
    justifyContent: "space-evenly",
  },
  justAround: {
    justifyContent: "space-around",
  },
  alignCenter: {
    alignItems: "center",
  },
  alignStart: {
    alignItems: "flex-start",
  },
  alignEnd: {
    alignItems: "flex-end",
  },
  gap4: {
    gap: 4,
  },
  gap8: {
    gap: 8,
  },
  gap16: {
    gap: 16,
  },
});

export { globalStyles };
