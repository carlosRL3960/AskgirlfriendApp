import * as React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import Inital from "../screens/InitialScreen";
import Home from "../screens/HomeScreen";
import Letter from "../screens/LetterScreen";

import { RValue } from "../utils/normalize";
import colors from "../utils/colors";
const Stack = createNativeStackNavigator();

const MainNavigation = () => (
  <Stack.Navigator
    initialRouteName="Initial"
    screenOptions={{
      headerStyle: {
        height: Platform.OS === "ios" ? RValue(100) : RValue(60),
        shadowColor: colors["surface"],
        shadowOffset: { height: 0, width: 0 },
        shadowRadius: 6,
        shadowOpacity: 0.15,
        elevation: 6,
        backgroundColor: colors.accent,
      },
      headerTintColor: "#FFF",
      headerTitleStyle: {
        fontSize: RValue(14),
      },
      headerBackTitle: " ",
    }}
  >
      <Stack.Screen
      name="Initial"
      component={Inital}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Letter"
      component={Letter}
      options={{
        headerShown: false,
      }}
    />

  </Stack.Navigator>
);

export default MainNavigation;
