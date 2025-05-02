import { StyleSheet } from 'react-native'
import { DynamicStyleProps } from './types'

export const styles = StyleSheet.create({
  listView: {
    flex: 1,
  },
  itemView: {
    flexDirection: 'row',
    marginHorizontal: 13,
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    alignItems: 'center',
    gap: 8,
  },
  itemImage: {
    width: 32,
    height: 32,
  },
})

export const getDynamicStyle = ({ colors }: DynamicStyleProps) => {
  return StyleSheet.create({
    listView: {
      backgroundColor: colors.background.primary,
    },
    itemView: {
      backgroundColor: colors.button.background.action,
    },
  })
}
