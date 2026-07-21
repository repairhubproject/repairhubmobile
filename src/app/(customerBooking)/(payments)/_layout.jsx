import { Stack } from 'react-native'
import React from 'react'

const paymentLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="bookingConfirmation"/>
      <Stack.Screen name="paymentMethod"/>
    </Stack>
  )
}

export default paymentLayout

const styles = StyleSheet.create({})