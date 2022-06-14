import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/navigation/mainNavigation";
import { StyleSheet, Text, View } from 'react-native';
import colors from "./src/utils/colors";

export default function App() {
  return (
    <NavigationContainer>
    <StatusBar
      barStyle="dark-content"
      backgroundColor={colors["color-primary-500"]}
    />
    <MainNavigation />
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
