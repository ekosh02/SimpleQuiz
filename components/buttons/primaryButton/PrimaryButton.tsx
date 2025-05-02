import { memo } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import { PrimaryButtonProps } from './types'
import { getDynamicStyle, styles } from './styles'
import { useAnimatedStyles } from './hooks'
import { getIndicatorColor, getIsPressable } from './utils'

const PrimaryButton = ({
  text = 'Press',
  subtext = '',
  leftIcon,
  rightIcon,
  isLoading,
  buttonStyle,
  viewStyle,
  enabled = true,
  style,
  ...props
}: PrimaryButtonProps) => {
  const { animatedBackgroundColorStyle, animatedFontColorStyle } = useAnimatedStyles({ enabled })
  const dynamicStyles = getDynamicStyle({ subtext, isLoading })
  const isPressable = getIsPressable({ enabled, isLoading })
  const indicatorColor = getIndicatorColor({ enabled })

  return (
    <Animated.View style={[styles.view, animatedBackgroundColorStyle, viewStyle]}>
      <RectButton enabled={isPressable} style={[styles.buttonView, dynamicStyles.buttonView, buttonStyle]} {...props}>
        {isLoading && (
          <View style={styles.loadingView}>
            <ActivityIndicator color={indicatorColor} />
          </View>
        )}
        <View style={[styles.textsColumnView, dynamicStyles.textsColumnView]}>
          <View style={styles.textRowView}>
            {Boolean(leftIcon) && leftIcon}
            {Boolean(text) && (
              <Animated.Text style={[styles.text, animatedFontColorStyle]} numberOfLines={1}>
                {text}
              </Animated.Text>
            )}
            {Boolean(rightIcon) && rightIcon}
          </View>
          {Boolean(subtext) && (
            <Animated.Text style={[styles.subtext, animatedFontColorStyle]} numberOfLines={1}>
              {subtext}
            </Animated.Text>
          )}
        </View>
      </RectButton>
    </Animated.View>
  )
}

export default memo(PrimaryButton)
