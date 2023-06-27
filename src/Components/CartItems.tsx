import React from "react";
import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";
import { SwipeListView } from "react-native-swipe-list-view";
import products from "../data/Products";
import Colors from "../color";
import { FontAwesome } from "@expo/vector-icons";
import { View } from "react-native";

const Swiper = () => (
  <SwipeListView
    scrollEnabled={false}
    rightOpenValue={-50}
    previewRowKey="0"
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={products}
    renderItem={renderItems}
    renderHiddenItem={renderHiddenIterms}
    showsVerticalScrollIndicator={false}
  />
);

const renderItems = (data: any) => (
  <View>
    <Pressable>
      <Box ml={6} mb={3}>
        <HStack
          alignItems={"center"}
          bg={Colors.white}
          shadow={1}
          rounded={10}
          overflow={"hidden"}>
          <Center w={"25%"} bg={Colors.deepGray}>
            <Image
              source={{ uri: data.item.image }}
              alt={data.item.name}
              w={"full"}
              h={24}
              resizeMode="cover"
            />
          </Center>
          <VStack w={"60%"} px={2} space={2}>
            <Text isTruncated color={Colors.dark} bold fontSize={12}>
              {data.item.name}
            </Text>
            <Text bold color={Colors.gray}>
              {data.item.price}
            </Text>
          </VStack>
          <Center>
            <Button
              bg={Colors.primary}
              _pressed={{ bg: Colors.primary }}
              _text={{ color: Colors.white }}>
              5
            </Button>
          </Center>
        </HStack>
      </Box>
    </Pressable>
  </View>
);

const renderHiddenIterms = () => (
  <Pressable
    w={50}
    roundedTopRight={10}
    roundedBottomRight={10}
    h={"88%"}
    ml={"auto"}
    justifyContent={"center"}
    bg={Colors.danger}>
    <Center alignItems={"center"}>
      <FontAwesome name="trash" size={24} color={Colors.white} />
    </Center>
  </Pressable>
);

export default function CartItems() {
  return (
    <Box mr={6}>
      <Swiper />
    </Box>
  );
}
