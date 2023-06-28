import React, { useState } from "react";
import {
  Box,
  Text,
  ScrollView,
  Image,
  Heading,
  HStack,
  Spacer,
} from "native-base";
import Colors from "../color";
import Rating from "../Components/Rating";
import NumericInput from "react-native-numeric-input";
import { color } from "native-base/lib/typescript/theme/styled-system";
import Buttone from "../Components/Buttone";
import Review from "../Components/Review";
import { useNavigation } from "@react-navigation/native";

interface props {
  route: any;
}

const SingleProductScreen = ({ route }: props) => {
  const [value, setValue] = useState(0);
  const navigation = useNavigation();
  const product = route.params;

  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: product.image }}
          alt="Image"
          w={"full"}
          h={300}
          resizeMode="cover"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          {product.name}
        </Heading>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        <HStack space={2} alignItems={"center"} my={5}>
          {product.countInStock ? (
            <NumericInput
              value={value}
              totalWidth={140}
              totalHeight={30}
              iconSize={25}
              step={1}
              maxValue={product.countInStock}
              minValue={0}
              borderColor={Colors.subOrange}
              rounded
              textColor={Colors.dark}
              iconStyle={{
                color: Colors.white,
              }}
              rightButtonBackgroundColor={Colors.primary}
              leftButtonBackgroundColor={Colors.primary}
              onChange={() => {}}
            />
          ) : (
            <Heading bold color={Colors.danger} italic fontSize={12}>
              Out of stock
            </Heading>
          )}
          <Spacer />
          <Heading bold color={Colors.dark} fontSize={19}>
            {product.price}
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          {product.descripcion}
        </Text>
        <Buttone
          bg={Colors.primary}
          color={Colors.white}
          mt={10}
          onPress={() => navigation.navigate("Cart")}>
          ADD TO CART
        </Buttone>
        <Review />
      </ScrollView>
    </Box>
  );
};

export default SingleProductScreen;
