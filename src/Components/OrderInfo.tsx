import React from "react";
import { Center, Heading, Text } from "native-base";
import Colors from "../color";
import { color } from "native-base/lib/typescript/theme/styled-system";

interface props {
  icon: object;
  title: string;
  subTitle: string;
  text: string;
  success?: boolean;
  danger?: boolean;
}
export default function OrderInfo(props: props) {
  return (
    <Center
      bg={Colors.white}
      w={200}
      py={2}
      rounded={10}
      shadow={4}
      mb={2}
      ml={5}
      mr={1}
      px={5}>
      <Center bg={Colors.primary} w={60} h={60} rounded={"full"}>
        {props.icon}
      </Center>
      <Heading bold fontSize={12} isTruncated mt={3} mb={2} color={Colors.dark}>
        {props.title}
      </Heading>
      <Text fontSize={13} color={Colors.dark}>
        {props.subTitle}
      </Text>
      <Text fontSize={13} textAlign={"center"} italic color={Colors.dark}>
        {props.text}
      </Text>
      {/* Status */}
      {props.success && (
        <Center py={2} mt={2} rounded={5} w={"full"} bg={Colors.blue}>
          <Text fontSize={12} color={Colors.white}>
            Paid on Jan 12 2021
          </Text>
        </Center>
      )}
      {props.danger && (
        <Center py={2} mt={2} rounded={5} w={"full"} bg={Colors.danger}>
          <Text fontSize={12} color={Colors.white}>
            Not Deliver
          </Text>
        </Center>
      )}
    </Center>
  );
}
