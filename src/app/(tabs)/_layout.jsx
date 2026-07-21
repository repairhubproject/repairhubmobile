import { Tabs } from 'react-native'
import React from 'react'

const Tabslayout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="index" options={{title: "Home"}}/>
        <Tabs.Screen name="techniciansProfile" options={{title: "Technician Profile"}} />
        <Tabs.Screen name="bookings" options={{title: "Bookings"}}/>
        <Tabs.Screen name="notifications" options={{title: "Notification"}} />
        <Tabs.Screen name="profile" options={{title: "Profile"}} />

    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})