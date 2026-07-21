import { Tabs } from "expo-router";
import React from 'react'

export default function Tabslayout() {
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