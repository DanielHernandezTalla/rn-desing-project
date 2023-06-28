import { Button, Center, HStack, Modal, Text, VStack } from "native-base";
import React, { useState } from "react";
import Buttone from "./Buttone";
import Colors from "../color";
import { useNavigation } from "@react-navigation/native";

const OrdersInfos = [
  { title: "Products", price: 123.32, color: "dark" },
  { title: "Shipping", price: 43.32, color: "dark" },
  { title: "Tax", price: 12.32, color: "dark" },
  { title: "Total Amount", price: 3212.32, color: "main" },
];

export default function PlaceOrderModel() {
  const [showModel, setShowModel] = useState(false);
  const navigation = useNavigation();

  return (
    <Center>
      <Buttone
        onPress={() => setShowModel(true)}
        bg={Colors.dark}
        color={Colors.white}
        mt={5}>
        SHOW TOTAL
      </Buttone>
      <Modal isOpen={showModel} onClose={() => setShowModel(false)} size={"lg"}>
        <Modal.Content maxWidth={350}>
          {/* <Modal.CloseButton /> */}
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {OrdersInfos.map((item, index) => (
                <HStack
                  key={index}
                  alignItems={"center"}
                  justifyContent={"space-between"}>
                  <Text fontWeight={"medium"}>{item.title}</Text>
                  <Text
                    color={item.color === "dark" ? Colors.dark : Colors.primary}
                    bold>
                    {item.price}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex={1}
              bg={Colors.primary}
              h={45}
              _text={{ color: Colors.white }}
              onPress={() => {
                navigation.navigate("Order");
                setShowModel(false);
              }}
              _pressed={{ bg: Colors.primary }}>
              PLACE AN ORDER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
}
