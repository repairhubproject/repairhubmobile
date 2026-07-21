import { Stack } from 'react-native'
import React from 'react'

const Bookinglayout = () => {
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

export default _layout

const styles = StyleSheet.create({})