import {
  Button,
  Center,
  HStack,
  Image,
  Modal,
  Pressable,
  Text,
  VStack,
} from "native-base";
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

export default function OrderModel() {
  const [showModel, setShowModel] = useState(false);
  const navigation = useNavigation();

  return (
    <Center>
      <Buttone
        onPress={() => setShowModel(true)}
        bg={Colors.dark}
        color={Colors.white}
        mt={5}>
        SHOW PAYMENT & TOTAL
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
            <Pressable
              w={"full"}
              justifyContent={"center"}
              bg={Colors.warning}
              h={45}
              rounded={3}
              overflow={"hidden"}
              onPress={() => setShowModel(false)}>
              <Image
                source={require("../../assets/images/paypal.png")}
                alt="paypal"
                resizeMode="contain"
                w={"full"}
                h={34}
              />
            </Pressable>
            <Button
              w={"full"}
              mt={2}
              bg={Colors.dark}
              h={45}
              _text={{ color: Colors.white }}
              onPress={() => {
                navigation.navigate("Home");
                setShowModel(false);
              }}
              _pressed={{ bg: Colors.dark }}>
              PLACE LATER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
}
