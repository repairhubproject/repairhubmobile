import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

const login = () => {
  return (
    <SafeAreaView>
        <View>
            <Text>Login Page</Text>
            <Link href="/">Go to homepage</Link>
        </View>
    </SafeAreaView>
  )
}

export default login

const styles = StyleSheet.create({})