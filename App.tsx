import { NativeBaseProvider } from "native-base";
import HomeScreen from "./src/Screens/HomeScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <RegisterScreen />
    </NativeBaseProvider>
  );
}
