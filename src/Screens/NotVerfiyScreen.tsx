import { View, Text } from "react-native";
import React from "react";
import { Box, Button, Center, Image, VStack } from "native-base";
import Colors from "../color";
import Buttone from "../Components/Buttone";

const NotVerfiyScreen = () => {
  return (
    <Box flex={1} bg={Colors.white} safeAreaTop>
      <Center w={"full"} h={250}>
        <Image
          source={require("../../assets/favicon.png")}
          alt="Logo"
          size={"lg"}
        />
      </Center>
      <VStack space={6} px={5} alignItems={"center"}>
        <Buttone bg={Colors.dark} color={Colors.white}>
          Register
        </Buttone>
        <Buttone bg={Colors.primary} color={Colors.white}>
          LOGIN
        </Buttone>
      </VStack>
    </Box>
  );
};

export default NotVerfiyScreen;
