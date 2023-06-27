import React from "react";
import { Box, Center, Heading, Image, Text } from "native-base";
import Colors from "../color";
import { color } from "native-base/lib/typescript/theme/styled-system";
import Tabs from "../Components/Profile/Tabs";

const ProfileScreen = () => {
  return (
    <>
      <Center bg={Colors.primary} pt={16} pb={6}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg",
          }}
          alt="profile"
          w={24}
          h={24}
          resizeMode="cover"
          rounded={50}
        />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          Daniel Hernandez
        </Heading>
        <Text italic fontSize={10} color={Colors.white}>
          27 de junio del 2023
        </Text>
      </Center>
      {/* TABS */}
      <Tabs />
    </>
  );
};

export default ProfileScreen;
