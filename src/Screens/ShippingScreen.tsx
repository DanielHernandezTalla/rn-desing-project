import {
  Box,
  Center,
  FormControl,
  Input,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React from "react";
import Colors from "../color";
import Buttone from "../Components/Buttone";
import { useNavigation } from "@react-navigation/native";

const ShippingInputs = [
  { label: "ENTER CITY", type: "text" },
  { label: "ENTER COUNTRY", type: "text" },
  { label: "ENTER POSTAL CODE", type: "text" },
  { label: "ENTER ADDRESS", type: "text" },
];

export default function ShippingScreen() {
  const navigation = useNavigation();

  return (
    <Box flex={1} safeAreaTop bg={Colors.primary} py={5}>
      {/* Header */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          DELIVERY ADDRESS
        </Text>
      </Center>
      {/* Inputs */}
      <Box h={"full"} bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {ShippingInputs.map((item, index) => (
              <FormControl key={index}>
                <FormControl.Label
                  _text={{
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}>
                  {item.label}
                </FormControl.Label>
                <Input
                  borderWidth={0.2}
                  borderColor={Colors.primary}
                  bg={Colors.subOrange}
                  py={3}
                  color={Colors.primary}
                  type={item.type}
                  _focus={{
                    bg: Colors.subOrange,
                    borderWidth: 1,
                    borderColor: Colors.primary,
                  }}
                />
              </FormControl>
            ))}
            <Buttone
              bg={Colors.primary}
              color={Colors.white}
              mt={5}
              onPress={() => navigation.navigate("Checkout")}>
              CONTINUE
            </Buttone>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}
