import { NativeBaseProvider } from "native-base";
import HomeScreen from "./src/Screens/HomeScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
import NotVerfiyScreen from "./src/Screens/NotVerfiyScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <HomeScreen />
    </NativeBaseProvider>
  );
}
