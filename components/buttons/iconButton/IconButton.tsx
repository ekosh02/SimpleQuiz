import { Animated, TouchableOpacity } from 'react-native'
import { useAnimatedStyle } from './hooks'
import { styles } from './styles'
import { IconButtonProps } from './types'

const IconButton = ({
  onPress,
  scaleTo,
  friction,
  tension,
  activeOpacity = 0.8,
  disabled,
  children,
  onPressIn,
  onPressOut,
  ...props
}: IconButtonProps) => {
  const {
    animatedStyle,
    onPressIn: triggerPressInAnimation,
    onPressOut: triggerPressOutAnimation,
  } = useAnimatedStyle({ scaleTo, friction, tension })

  const handlePressIn = () => {
    onPressIn?.()
    triggerPressInAnimation()
  }

  const handlePressOut = () => {
    onPressOut?.()
    triggerPressOutAnimation()
  }

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={activeOpacity}
      {...props}
    >
      <Animated.View style={[styles.view, animatedStyle]}>{children}</Animated.View>
    </TouchableOpacity>
  )
}

export default IconButton
