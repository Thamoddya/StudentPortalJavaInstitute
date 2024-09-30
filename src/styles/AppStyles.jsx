import { Dimensions, StyleSheet } from "react-native";
import Colors from "./Colors";

export const ScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_BLACK,
  },
  subContainer: {
    padding: 16,
  },
  HomeSubContainer: {
    padding: 16,
    marginTop: 16,
  },
});

export const SpaceStyles = StyleSheet.create({
  m4: {
    gap: 4,
  },
  m8: {
    gap: 8,
  },
  m16: {
    gap: 16,
  },
});

export const TextStyles = StyleSheet.create({
  H1: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFF",
    // fontFamily: "SF-Pro-Display-Bold",
  },
  H2: {
    fontSize: 22,
    lineHeight: 28,
    color: "#FFF",
    fontWeight: "700",
    letterSpacing: -0.3,
    // fontFamily: "SF-Pro-Display-Bold",
  },
  H3: {
    fontSize: 18,
    lineHeight: 24,
    color: "#FFF",
    fontWeight: "500",
    letterSpacing: -0.3,
    // fontFamily: "SF-Pro-Display-Bold",
  },
  H4: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#FFF",
    // fontFamily: "SF-Pro-Display-Bold",
  },
  H5: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#FFF",
    // fontFamily: "SF-Pro-Display-Bold",
  },
  H6: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#FFF",
    // fontFamily: "SF-Pro-Display-Bold",
  },
  H7: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFF",
    // fontFamily: "SF-Pro-Display-Bold",
  },
  P: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#FFF",
    // fontFamily: "SF-Pro-Display-Bold",
    lineHeight: 20,
  },
});

export const ScreenSizes = {
  width: Dimensions.get("screen").width,
  height: Dimensions.get("screen").height,
};
