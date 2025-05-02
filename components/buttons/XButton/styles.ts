import { StyleSheet } from 'react-native'
import { DynamicStylesProps } from './types'

export const styles = StyleSheet.create({
  view: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
})

export const getDynamicStyles = ({ colors }: DynamicStylesProps) => {
  return StyleSheet.create({
    view: {
      backgroundColor: colors.icon.background,
      shadowColor: colors.icon.shadow,
    },
  })
}
