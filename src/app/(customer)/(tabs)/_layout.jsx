import { Tabs } from "expo-router";
import React from 'react'
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import Ionicons from '@react-native-vector-icons/ionicons';

export default function Tabslayout() {
  return (
    <Tabs screenOptions={{headerShown: false}}>
        <Tabs.Screen name="index" options={{title: "Home",
          tabBarIcon:({focused})=>(<MaterialDesignIcons name={focused ? "home-variant" : "home-variant-outline"} size={26} color="blue"   />
          )
           
        }}/>
        <Tabs.Screen name="techniciansProfile" options={{title: "Technician Profile",
          tabBarIcon:({focused})=>(<MaterialDesignIcons name={focused ? "account-wrench" : "account-wrench-outline"} size={26} color="blue"   />
          )
        }} />
        <Tabs.Screen name="bookings" options={{title: "Bookings",
          tabBarIcon:({focused})=>(<MaterialDesignIcons name={focused ? "calendar-blank" : "calendar-blank-outline"} size={26} color="blue"   />
          )
        }}/>
        <Tabs.Screen name="notifications" options={{title: "Notification",
          tabBarIcon:({focused})=>(<MaterialDesignIcons name={focused ? "bell" : "bell-outline"} size={26} color="blue"   />
          )
        }} />
        <Tabs.Screen name="profile" options={{title: "Profile",
          tabBarIcon:({focused})=>(<MaterialDesignIcons name={focused ? "account" : "account-outline"} size={26} color="blue"   />
          )
        }} />

    </Tabs>
  )
}