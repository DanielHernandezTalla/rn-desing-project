import React from "react";
import { Box, HStack, Input, Pressable } from "native-base";
import Colors from "../color";
import { FontAwesome5 } from "@expo/vector-icons";

const HomeSearch = () => {
  return (
    <HStack
      space={3}
      w={"full"}
      px={6}
      bg={Colors.primary}
      py={4}
      alignItems={"center"}
      safeAreaTop>
      <Input
        placeholder="Nike, Puma, Adidas... "
        w={"85%"}
        bg={Colors.white}
        type="text"
        variant={"filled"}
        h={12}
        borderWidth={0}
        _focus={{
          bg: Colors.white,
        }}
      />
      <Pressable ml={3}>
        <FontAwesome5 name="shopping-basket" size={24} color={Colors.white} />
        <Box
          px={1}
          rounded={"full"}
          position={"absolute"}
          top={-13}
          left={2}
          bg={Colors.danger}
          _text={{ color: Colors.white, fontSize: "11px" }}>
          5
        </Box>
      </Pressable>
    </HStack>
  );
};

export default HomeSearch;
