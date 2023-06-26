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

const SingleProductScreen = () => {
  const [value, setValue] = useState(0);

  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../assets/images/4.webp")}
          alt="Image"
          w={"full"}
          h={300}
          resizeMode="cover"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          New Adidas Shoes form Amazon Shop
        </Heading>
        <Rating value={3} />
        <HStack space={2} alignItems={"center"} my={5}>
          <NumericInput
            value={value}
            totalWidth={140}
            totalHeight={30}
            iconSize={25}
            step={1}
            maxValue={15}
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
          <Spacer />
          <Heading bold color={Colors.dark} fontSize={19}>
            $400
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          Tienes ya el básquetbol y la velocidad; amárrate las agujetas y realza
          lo que traes a la cancha. El nuevo AJ se centra en los despegues y los
          aterrizajes, con varias unidades Air para que puedas despegar y espuma
          Formula 23 para amortiguar los impactos. La parte superior está
          confeccionada con tejido Leno reforzado y resistente para mantener el
          soporte sin limitar tu juego. Tienes ya el básquetbol y la velocidad;
          amárrate las agujetas y realza lo que traes a la cancha. El nuevo AJ
          se centra en los despegues y los aterrizajes, con varias unidades Air
          para que puedas despegar y espuma Formula 23 para amortiguar los
          impactos.
        </Text>
        <Buttone bg={Colors.primary} color={Colors.white} mt={10}>
          ADD TO CART
        </Buttone>
        <Review />
      </ScrollView>
    </Box>
  );
};

export default SingleProductScreen;
