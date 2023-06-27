import {
  Box,
  Button,
  Center,
  FlatList,
  HStack,
  Image,
  Text,
  VStack,
} from "native-base";
import React from "react";
import products from "../data/Products";
import { Pressable } from "react-native";
import Colors from "../color";

export default function OrderItem() {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={products}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <Pressable>
          <Box mb={3}>
            <HStack
              alignItems={"center"}
              bg={Colors.white}
              shadow={1}
              rounded={10}
              overflow={"hidden"}>
              <Center w={"25%"} bg={Colors.deepGray}>
                <Image
                  source={{ uri: item.image }}
                  alt={item.name}
                  w={"full"}
                  h={24}
                  resizeMode="cover"
                />
              </Center>
              <VStack w={"60%"} px={2}>
                <Text isTruncated color={Colors.dark} bold fontSize={12}>
                  {item.name}
                </Text>
                <Text color={Colors.gray} mt={2} bold>
                  {item.price}
                </Text>
              </VStack>
              <Center>
                <Button bg={Colors.primary} _pressed={{ bg: Colors.primary }}>
                  5
                </Button>
              </Center>
            </HStack>
          </Box>
        </Pressable>
      )}
    />
  );
}
