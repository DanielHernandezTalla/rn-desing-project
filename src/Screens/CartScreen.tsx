import { Box, Button, Center, HStack, ScrollView, Text } from "native-base";
import React from "react";
import Colors from "../color";
import CartItems from "../Components/CartItems";
import Buttone from "../Components/Buttone";
import CartEmpty from "../Components/CartEmpty";

export default function CartScreen() {
  return (
    <Box flex={1} safeAreaTop bg={Colors.subOrange}>
      <Center w={"full"} py={5}>
        <Text color={Colors.dark} fontSize={20} bold>
          Cart
        </Text>
      </Center>
      {/* IF CART IS EMPTY */}
      {/* <CartEmpty /> */}

      {/* IF CART HAVE ITEMS */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartItems />
        {/* Total */}
        <Center mt={5}>
          <HStack
            rounded={50}
            justifyContent={"space-between"}
            bg={Colors.white}
            shadow={2}
            w={"90%"}
            pl={5}
            h={45}
            alignItems={"center"}>
            <Text>Total</Text>
            <Button
              px={10}
              h={45}
              rounded={50}
              bg={Colors.primary}
              _text={{
                fontWeight: "semibold",
              }}
              _pressed={{ bg: Colors.primary }}>
              $356
            </Button>
          </HStack>
        </Center>
        {/* Checkout */}
        <Center px={5}>
          <Buttone bg={Colors.dark} color={Colors.white} mt={10}>
            CHECKOUT
          </Buttone>
        </Center>
      </ScrollView>
    </Box>
  );
}
