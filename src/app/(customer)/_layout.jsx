import { Stack } from "expo-router";


export default function CustomerLayout() {

  return (
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="(auth)"/>
        <Stack.Screen name="(tabs)"/>
        <Stack.Screen name="(customerBooking)"/>
        <Stack.Screen name="allCategories"/>
        <Stack.Screen name="editProfile"/>
        <Stack.Screen name="onboarding"/>
        <Stack.Screen name="reviews"/>
        <Stack.Screen name="search"/>
        <Stack.Screen name="support"/>
      </Stack>
    );
}
