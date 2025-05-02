import { ReactNode } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { RectButtonProps } from 'react-native-gesture-handler'

export interface PrimaryButtonProps extends RectButtonProps {
  text?: string
  subtext?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  isLoading?: boolean
  buttonStyle?: StyleProp<ViewStyle>
  viewStyle?: StyleProp<ViewStyle>
}

export type IsPressableProps = {
  enabled: boolean
  isLoading: PrimaryButtonProps['isLoading']
}

export type IndicatorColorProps = {
  enabled: boolean
}

export type DynamicStyleProps = {
  subtext: PrimaryButtonProps['subtext']
  isLoading: PrimaryButtonProps['isLoading']
}
