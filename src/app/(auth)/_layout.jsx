import { Stack } from 'react-native'
import React from 'react'

const authlayout = () => {
  return (
    <Stack>
        <Stack.Screen name="login"/>
        <Stack.Screen name="register"/>
    </Stack>
  )
}

export default authlayout

const styles = StyleSheet.create({})