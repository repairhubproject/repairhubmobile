import { Stack } from "expo-router";
import React from 'react'

export default function paymentLayout() {
  return (
    <Stack>
      <Stack.Screen name="bookingConfirmation"/>
      <Stack.Screen name="paymentMethod"/>
    </Stack>
  )
}

