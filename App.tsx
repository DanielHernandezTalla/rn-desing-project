import { NativeBaseProvider } from "native-base";
import HomeScreen from "./src/Screens/HomeScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <HomeScreen />
    </NativeBaseProvider>
  );
}
