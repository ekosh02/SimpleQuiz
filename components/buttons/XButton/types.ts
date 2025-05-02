import { BorderlessButtonProps } from 'react-native-gesture-handler'
import { Colors } from '@/types'

export interface XButtonProps extends BorderlessButtonProps {
  style?: BorderlessButtonProps['style']
}

export type DynamicStylesProps = {
  colors: Colors
}
