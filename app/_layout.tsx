import { Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const RootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="(public)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  )
}

export default RootLayout
