import { isIphoneX } from "react-native-iphone-x-helper";
import { Platform, StatusBar, Dimensions, Linking, Alert } from "react-native";

const { height } = Dimensions.get("window");

const deviceHeight = isIphoneX()
  ? height - 78 // iPhone X style SafeAreaView size in portrait
  : Platform.OS === "android"
  ? height - StatusBar.currentHeight
  : height;

export function RPercentage(percent) {
  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
}

export function RValue(fontSize) {
  // guideline height for standard 5" device screen
  const standardScreenHeight = 680;
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}









