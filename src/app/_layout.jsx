import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";

export default function RootLayout() {
  SplashScreen.preventAutoHideAsync()
  const [loaded, error] = useFonts({
    "poppins-regular": require("../../assets/fonts/Poppins/Poppins-Regular.ttf"),
    "poppins-semi-bold": require("../../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "poppins-bold": require("../../assets/fonts/Poppins/Poppins-Bold.ttf"),
    "poppins-extra-bold": require("../../assets/fonts/Poppins/Poppins-ExtraBold.ttf")
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index"/>
        <Stack.Screen name="welcome"/>
        <Stack.Screen name="(customer)"/>
        <Stack.Screen name="(technician)"/>
      </Stack>
    );
}
