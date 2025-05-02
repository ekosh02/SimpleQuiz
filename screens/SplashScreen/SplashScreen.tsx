import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import { Text, View } from 'react-native'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import styles from './styles'

const SplashScreen = () => {
  const router = useRouter()
  const scale = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    }
  })

  useEffect(() => {
    scale.value = withTiming(1, {
      duration: 800,
      easing: Easing.out(Easing.exp),
    })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      router.replace('/(tabs)/quizListTab')
    }, 1000)
  }, [])

  return (
    <View style={styles.view}>
      <Animated.View style={animatedStyle}>
        <Text style={styles.titleText}>{'Simple Quiz'}</Text>
      </Animated.View>
    </View>
  )
}

export default SplashScreen
