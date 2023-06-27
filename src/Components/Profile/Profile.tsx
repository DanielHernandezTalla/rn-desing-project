import { Box, FormControl, Input, ScrollView, VStack } from "native-base";
import React from "react";
import Colors from "../../color";
import Buttone from "../Buttone";

const Inputs = [
  { label: "USERNAME", type: "text" },
  { label: "EMAIL", type: "text" },
  { label: "NEW PASSWORD", type: "password" },
  { label: "CONFIRM PASSWORD", type: "password" },
];

export default function Profile() {
  return (
    <Box h={"full"} bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={4} mt={5} pb={10}>
          {Inputs.map((item, index) => (
            <FormControl key={index}>
              <FormControl.Label
                _text={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: Colors.dark,
                }}>
                {item.label}
              </FormControl.Label>
              <Input
                borderWidth={0.3}
                bg={Colors.subOrange}
                py={3}
                type={item.type}
                color={Colors.primary}
                fontSize={15}
                _focus={{
                  bg: Colors.subOrange,
                  borderColor: Colors.primary,
                  borderWidth: 1,
                }}
              />
            </FormControl>
          ))}
          <Buttone bg={Colors.primary} color={Colors.white}>
            UPDATE PROFILE
          </Buttone>
        </VStack>
      </ScrollView>
    </Box>
  );
}
