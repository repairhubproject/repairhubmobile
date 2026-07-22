import { Stack } from "expo-router";
import React from 'react'

export default function Bookinglayout() {
  return (
    <Stack>
      <Stack.Screen name="(deviceDetails)" />
      <Stack.Screen name="(payments)" />
      <Stack.Screen name="customerAddress" />
      <Stack.Screen name="repairCompletion" />
      <Stack.Screen name="repairForm" />
      <Stack.Screen name="repairHistory" />
      <Stack.Screen name="repairRequest" />
      <Stack.Screen name="repairServices" />
      <Stack.Screen name="repairUpload" />

    </Stack>
  )
}
