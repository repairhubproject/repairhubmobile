import { Stack } from "expo-router";
import React from 'react'

export default function authlayout(){
  return (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="login"/>
        <Stack.Screen name="register"/>
    </Stack>
  )
}

