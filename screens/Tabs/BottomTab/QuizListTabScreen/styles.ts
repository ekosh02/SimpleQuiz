import { StyleSheet } from 'react-native'
import { DynamicStyleProps } from './types'

export const styles = StyleSheet.create({
  listView: {
    flex: 1,
  },
})

export const getDynamicStyle = ({ colors }: DynamicStyleProps) => {
  return StyleSheet.create({
    listView: {
      backgroundColor: colors.background.primary,
    },
  })
}
