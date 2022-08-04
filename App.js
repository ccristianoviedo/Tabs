import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from "expo-font";
import AppLoading from 'expo-app-loading';
import ShopNavigator from './navigation/ShopNavigator';

export default function App() {

  const [loaded] = useFonts({
    UbuntuBold: require("./assets/fonts/Ubuntu-Bold.ttf"),
    UbuntuRegular: require("./assets/fonts/Ubuntu-Regular.ttf"),
 })

if (!loaded) return <AppLoading/>

return (
    <ShopNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});