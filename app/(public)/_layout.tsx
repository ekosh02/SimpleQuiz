import { Stack } from 'expo-router'

const PublicLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="quizPreview" options={{ headerShown: false, title: 'Quiz Preview' }} />
      <Stack.Screen name="quizTest" options={{ headerShown: false, title: 'Quiz Test' }} />
      <Stack.Screen name="quizResult" options={{ headerShown: false, title: 'Quiz Result' }} />
    </Stack>
  )
}

export default PublicLayout
