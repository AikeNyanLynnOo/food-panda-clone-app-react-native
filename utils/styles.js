import { StyleSheet } from "react-native";
import { primary, primaryGrey, secondaryGrey } from "./colors";

export const styles = StyleSheet.create({
  bgPrimary: {
    backgroundColor: primary,
  },
  textPrimary: {
    color: primary,
  },
  cardBorder: {
    borderWidth: 0.2,
    borderColor: secondaryGrey,
  },
});
