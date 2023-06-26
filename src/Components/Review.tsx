import React, { useState } from "react";
import SelectList from "react-native-dropdown-select-list";
import {
  Box,
  FormControl,
  Heading,
  VStack,
  Text,
  TextArea,
  Button,
} from "native-base";
import Messaje from "./Notifications/Messaje";
import Colors from "../color";
import Rating from "./Rating";
import Buttone from "./Buttone";

export default function Review() {
  //usoCFDI
  const [catCFDI, setCatCFDI] = useState<any>([
    {
      key: 1,
      value: "Poor",
    },
    {
      key: 2,
      value: "Fair",
    },
    {
      key: 5,
      value: "Good",
    },
  ]);
  const [jsonCFDI, setJsonCFDI] = useState([]);
  const [cfdiSelected, setCfdiSelected] = useState();

  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        REVIEW
      </Heading>
      {/* IF THERE IS NOT REVIEW */}
      <Messaje
        color={Colors.primary}
        bg={Colors.subOrange}
        children="NO REVIEW."
        bold
      />
      {/* REVIEW */}
      <Box p={3} bg={Colors.subOrange} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.dark}>
          User Doe
        </Heading>
        <Rating value={4} />
        <Text my={2} fontSize={11}>
          Jan 12 2012
        </Text>
        <Messaje
          color={Colors.dark}
          bg={Colors.white}
          size={10}
          children="Tienes ya el básquetbol y la velocidad; amárrate las agujetas y realza lo que traes a la cancha."
        />
      </Box>
      {/* Write review */}
      <Box mt={6}>
        <Heading fontSize={15} bold mb={4}>
          REVIEW THIS PRODUCT
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12",
                fontWeight: "bold",
              }}>
              Rating
            </FormControl.Label>
            <SelectList
              setSelected={setCfdiSelected}
              data={catCFDI}
              placeholder="Choose Rate"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12",
                fontWeight: "bold",
              }}>
              Comment
            </FormControl.Label>
            <TextArea
              h={24}
              w={"full"}
              placeholder="This product is good..."
              borderWidth={0}
              _focus={{
                bg: Colors.subOrange,
              }}
              bg={Colors.subOrange}
              py={4}></TextArea>
          </FormControl>
          <Buttone bg={Colors.primary} color={Colors.white}>
            SUBMIT
          </Buttone>
          {/* If not login */}
          <Messaje
            color={Colors.white}
            bg={Colors.dark}
            children="Please 'login' to write a review."
            bold
          />
        </VStack>
      </Box>
    </Box>
  );
}
