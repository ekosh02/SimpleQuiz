import { ReactNode } from 'react'
import { TouchableOpacityProps } from 'react-native-gesture-handler'

export interface IconButtonProps extends TouchableOpacityProps {
  onPress?: () => void
  children: ReactNode
  scaleTo?: number
  friction?: number
  tension?: number
  activeOpacity?: number
}
