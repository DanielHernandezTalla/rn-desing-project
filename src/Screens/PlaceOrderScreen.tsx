import { Box, Heading, ScrollView } from "native-base";
import React from "react";
import Colors from "../color";
import OrderInfo from "../Components/OrderInfo";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import OrderItem from "../Components/OrderItem";
import PlaceOrderModel from "../Components/PlaceOrderModel";

export default function PlaceOrderScreen() {
  return (
    <Box bg={Colors.subOrange} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="CUSTOMER"
            subTitle="Admin Doe"
            text="admin@gmail.com"
            icon={<FontAwesome name="user" size={30} color={Colors.white} />}
          />
          <OrderInfo
            title="SHIPPING INFO"
            subTitle="Shipping: Tanzania"
            text="Pay Method: Paypal"
            icon={
              <FontAwesome5
                name="shipping-fast"
                size={30}
                color={Colors.white}
              />
            }
          />
          <OrderInfo
            title="DELIVER TO"
            subTitle="Address:"
            text="Arusha Tz, Ngaramtoni Crater, P.O BOX 1234"
            icon={
              <Ionicons name="location-sharp" size={30} color={Colors.white} />
            }
          />
        </ScrollView>
      </Box>
      {/* Order item */}
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
          PRODUCTS
        </Heading>
        <OrderItem />
        {/* Total */}
        <PlaceOrderModel></PlaceOrderModel>
      </Box>
    </Box>
  );
}
