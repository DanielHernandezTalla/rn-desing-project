import { NativeBaseProvider } from "native-base";
import HomeScreen from "./src/Screens/HomeScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
import NotVerfiyScreen from "./src/Screens/NotVerfiyScreen";
import SingleProductScreen from "./src/Screens/SingleProductScreen";
import Review from "./src/Components/Review";
import CartScreen from "./src/Screens/CartScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";
import ShippingScreen from "./src/Screens/ShippingScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <ShippingScreen />
    </NativeBaseProvider>
  );
}
