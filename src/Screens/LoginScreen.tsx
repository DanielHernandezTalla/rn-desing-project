import React from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  VStack,
  Text,
  Pressable,
} from "native-base";
import Colors from "../color";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const LoginScreen = () => {
  return (
    <Box flex={1} bg={Colors.dark}>
      <Image
        flex={1}
        alt={"Logo"}
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/cover.png")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent={"center"}>
        <Heading>LOGIN</Heading>
        <VStack space={5} pt={6}>
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={20} color={Colors.primary} />
            }
            variant="underlined"
            placeholder="user@gmail.com"
            w="70%"
            pl={2}
            color={Colors.primary}
            borderBottomColor={Colors.underline}
          />
          <Input
            InputLeftElement={
              <Ionicons name="eye" size={20} color={Colors.primary} />
            }
            variant="underlined"
            placeholder="**********"
            w="70%"
            type="password"
            pl={2}
            color={Colors.primary}
            borderBottomColor={Colors.underline}
          />
          <Button
            _pressed={{ bg: Colors.primary }}
            my={30}
            w="40%"
            rounded={50}
            bg={Colors.primary}>
            LOGIN
          </Button>
          <Pressable mt={4}>
            <Text color={Colors.gray}>SING UP</Text>
          </Pressable>
        </VStack>
      </Box>
    </Box>
  );
};

export default LoginScreen;
