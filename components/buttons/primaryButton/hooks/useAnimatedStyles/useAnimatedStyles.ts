import { useTheme } from '@/hooks'
import { useEffect } from 'react'
import { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { AnimatedStylesProps } from './types'
import { duration } from './constants'

const useAnimatedStyles = ({ enabled }: AnimatedStylesProps) => {
  const { colors } = useTheme()

  const { background, font } = colors.button

  const colorProgress = useSharedValue(enabled ? 1 : 0)

  const animatedBackgroundColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(enabled ? background.primary : background.grayDisabled, { duration }),
    }
  })

  const animatedFontColorStyle = useAnimatedStyle(() => {
    const color = interpolateColor(colorProgress.value, [0, 1], [font.disabled, font.primary])
    return { color }
  })

  useEffect(() => {
    colorProgress.value = withTiming(enabled ? 1 : 0, { duration: 180 })
  }, [enabled])

  return { animatedBackgroundColorStyle, animatedFontColorStyle }
}

export default useAnimatedStyles
