import { Stack } from "expo-router";
import React from 'react'

export default function deviceDetailsLayout() {
  return (
    <Stack>
      <Stack.Screen name="deviceDetails"/>
      <Stack.Screen name="receivedQuotation"/>
      <Stack.Screen name="selectTechnician"/>
    </Stack>
  )
}
