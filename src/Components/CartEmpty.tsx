import React from "react";
import { Box, Center, Text } from "native-base";
import Colors from "../color";
import { FontAwesome } from "@expo/vector-icons";
import { color } from "native-base/lib/typescript/theme/styled-system";
import colors from "native-base/lib/typescript/theme/base/colors";
import Buttone from "./Buttone";

export default function CartEmpty() {
  return (
    <Box flex={1} px={4}>
      <Center h={"90%"}>
        <Center w={200} h={200} bg={Colors.white} rounded={"full"}>
          <FontAwesome
            name="shopping-basket"
            size={64}
            color={Colors.primary}
          />
        </Center>
        <Text color={Colors.primary} bold mt={5}>
          CART IS EMPTY
        </Text>
      </Center>
      <Buttone bg={Colors.dark} color={Colors.white}>
        START SHOPPOING
      </Buttone>
    </Box>
  );
}
