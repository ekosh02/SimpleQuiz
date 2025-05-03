import { width } from '@/utils'
import { StyleSheet } from 'react-native'
import { DynamicStyleProps } from './types'

export const styles = StyleSheet.create({
  progressItem: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 2,
  },

  questionItemView: {
    width: width,
    alignItems: 'center',
  },
  questionItemTitleText: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: '600',
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  questionItemOptionButton: {
    marginVertical: 10,
    borderRadius: 16,
    backgroundColor: '#fff',
    width: width / 2 - 32,
    paddingVertical: 20,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  questionItemOptionText: {
    fontSize: 20,
    fontWeight: '500',
  },
  questionItemSelectOptionText: {
    fontWeight: '700',
    color: '#fff',
  },
  questionItemImage: { marginTop: 30, width: width / 2, height: width / 2 },
  questionItemAnswers: { flexWrap: 'wrap', flexDirection: 'row', marginTop: 30 },
})

export const getDynamicStyle = ({ colors }: DynamicStyleProps) =>
  StyleSheet.create({
    questionItemView: {
      backgroundColor: colors.background.primary,
    },
    questionItemOptionSelectedText: {
      color: colors.font.white,
    },
  })
