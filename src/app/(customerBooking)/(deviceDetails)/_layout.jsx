import { Stack } from 'react-native'
import React from 'react'

const deviceDetailsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="deviceDetails"/>
      <Stack.Screen name="receivedQuotation"/>
      <Stack.Screen name="selectTechnician"/>
    </Stack>
  )
}

export default deviceDetailsLayout

const styles = StyleSheet.create({})