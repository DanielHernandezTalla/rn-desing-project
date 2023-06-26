import { Button } from "native-base";
import React, { Children } from "react";
import Colors from "../color";

interface data {
  mt?: number;
  bg?: string;
  color?: string;
  children?: string;
  onPress?: any;
}

const Buttone = (props: data) => {
  return (
    <Button
      w="full"
      h={55}
      mt={props.mt}
      rounded={"full"}
      bg={props.bg}
      _text={{ color: props.color, fontWeight: "bold", textAlign: "center" }}
      _pressed={{ bg: props.bg }}
      onPress={props.onPress}>
      {props.children}
    </Button>
  );
};

export default Buttone;
