import { Box, Button, HStack, Pressable, ScrollView, Text } from "native-base";
import React from "react";
import Colors from "../../color";

export default function Orders() {
  return (
    <Box h={"full"} bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Paid Order */}
        <Pressable>
          <HStack
            space={4}
            justifyContent={"center"}
            alignItems={"center"}
            bg={Colors.deepGray}
            py={5}
            px={2}>
            <Text fontSize={9} color={Colors.blue} isTruncated>
              63721673782347723
            </Text>
            <Text fontSize={12} bold color={Colors.dark} isTruncated>
              PAID
            </Text>
            <Text fontSize={11} italic color={Colors.dark} isTruncated>
              Dec 12 2022
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.primary}
              _text={{ color: Colors.white }}
              _pressed={{ bg: Colors.primary }}>
              $456
            </Button>
          </HStack>
        </Pressable>
        {/* NOT Paid Order */}
        <Pressable>
          <HStack
            space={4}
            justifyContent={"center"}
            alignItems={"center"}
            py={5}
            px={2}>
            <Text fontSize={9} color={Colors.blue} isTruncated>
              63721673782347723
            </Text>
            <Text fontSize={12} bold color={Colors.dark} isTruncated>
              NOT PAID
            </Text>
            <Text fontSize={11} italic color={Colors.dark} isTruncated>
              Dec 12 2022
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.danger}
              _text={{ color: Colors.white }}
              _pressed={{ bg: Colors.danger }}>
              $456
            </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  );
}
