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
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";

interface props {
  navigation: any;
}

const RegisterScreen = ({ navigation }: props) => {
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
        <Heading>REGISTER</Heading>
        <VStack space={5} pt={6}>
          <Input
            InputLeftElement={
              <FontAwesome name="user" size={20} color={Colors.primary} />
            }
            variant="underlined"
            placeholder="Daniel Hernandez"
            w="70%"
            pl={2}
            type="text"
            color={Colors.primary}
            borderBottomColor={Colors.underline}
          />
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
            bg={Colors.primary}
            onPress={() => navigation.navigate("Bottom")}>
            REGISTER
          </Button>
          <Pressable mt={4} onPress={() => navigation.navigate("Login")}>
            <Text color={Colors.gray}>LOGIN</Text>
          </Pressable>
        </VStack>
      </Box>
    </Box>
  );
};

export default RegisterScreen;
