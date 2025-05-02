import { useRef } from 'react'
import { Animated, ViewStyle } from 'react-native'
import { UseAnimatedStyleProps } from './types'

const useAnimateStyle = ({ scaleTo = 0.95, friction = 5, tension = 150 }: UseAnimatedStyleProps) => {
  const scaleValue = useRef(new Animated.Value(1)).current

  const onPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: scaleTo,
      friction,
      tension,
      useNativeDriver: true,
    }).start()
  }

  const onPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction,
      tension,
      useNativeDriver: true,
    }).start()
  }

  const animatedStyle: Animated.WithAnimatedObject<ViewStyle> = {
    transform: [{ scale: scaleValue }],
  }

  return { animatedStyle, onPressIn, onPressOut }
}

export default useAnimateStyle
