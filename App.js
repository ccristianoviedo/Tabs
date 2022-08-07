import {useFonts} from "expo-font";
import AppLoading from 'expo-app-loading';
import MainNavigator from "./navigation/Index";

export default function App() {

  const [loaded] = useFonts({
    UbuntuBold: require("./assets/fonts/Ubuntu-Bold.ttf"),
    UbuntuRegular: require("./assets/fonts/Ubuntu-Regular.ttf"),
 })

if (!loaded) return <AppLoading/>

return (
   <MainNavigator/>
  )
}