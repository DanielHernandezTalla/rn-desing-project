import {
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  Image,
  Input,
  ScrollView,
  Spacer,
  Text,
  VStack,
} from "native-base";
import React from "react";
import Colors from "../color";
import Buttone from "../Components/Buttone";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const paymentMothodes = [
  {
    image: require("../../assets/images/paypal.png"),
    alt: "paypal",
    icon: "Ionicons",
  },
  {
    image: require("../../assets/images/discover.png"),
    alt: "discover",
    icon: "fontAwesome",
  },
  {
    image: require("../../assets/images/googlepay.png"),
    alt: "googlepay",
    icon: "fontAwesome",
  },
];

export default function PaymentScreen() {
  return (
    <Box flex={1} safeAreaTop bg={Colors.primary} py={5}>
      {/* Header */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          PAYMENT METHOD
        </Text>
      </Center>
      {/* SELECTION  */}
      <Box h={"full"} bg={Colors.subOrange} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {paymentMothodes.map((item, index) => (
              <HStack
                key={index}
                alignItems={"center"}
                bg={Colors.white}
                px={3}
                py={1}
                justifyContent={"space-between"}
                rounded={10}>
                <Box>
                  <Image
                    source={item.image}
                    alt={item.alt}
                    resizeMode="contain"
                    w={70}
                    h={50}
                  />
                </Box>
                {item.icon === "Ionicons" ? (
                  <Ionicons
                    name="checkmark-circle"
                    size={30}
                    color={Colors.primary}
                  />
                ) : (
                  <FontAwesome
                    name="circle-thin"
                    size={30}
                    color={Colors.primary}
                  />
                )}
              </HStack>
            ))}
            <Buttone bg={Colors.primary} color={Colors.white} mt={5}>
              CONTINUE
            </Buttone>
            <Text italic textAlign={"center"}>
              Payment method is{" "}
              <Text italic bold>
                Paypal
              </Text>{" "}
              by default
            </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}
