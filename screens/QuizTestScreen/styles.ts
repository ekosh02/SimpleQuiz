import { StyleSheet } from 'react-native'
import { DynamicStyleProps } from './types'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listView: {
    marginTop: 13,
  },
})

export const getDynamicStyle = ({ colors, top }: DynamicStyleProps) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background.primary,
      paddingTop: top,
    },

    listView: {
      backgroundColor: colors.background.white,
    },
  })
