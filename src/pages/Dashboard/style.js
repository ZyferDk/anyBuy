import { StyleSheet } from "react-native";
import { Color } from "../../utils/Colors";

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Color.milanoRed,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: Color.burntRed,
    marginTop: 52,
    justifyContent: "center",
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    marginHorizontal: -8,
    paddingHorizontal: 37,
  },
});
