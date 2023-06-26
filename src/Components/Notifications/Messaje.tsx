import React from "react";
import { Center, Text } from "native-base";

interface props {
  bg?: string;
  color?: string;
  children?: string;
  size?: number;
  bold?: boolean;
}

const Messaje = (props: props) => {
  return (
    <Center bg={props.bg} p={4} rounded={5}>
      <Text color={props.color} fontSize={props.size} bold={props.bold}>
        {props.children}
      </Text>
    </Center>
  );
};

export default Messaje;
