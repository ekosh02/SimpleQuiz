import { width } from '@/utils'
import { StyleSheet } from 'react-native'
import { DynamicStyleProps } from './types'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
  progressContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  progressItem: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 2,
  },
  progressBar: {
    height: 10,
    width: '100%',
    borderRadius: 5,
  },
  progressText: {
    fontSize: 16,
    fontWeight: '500',
  },
  listView: {
    marginTop: 13,
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

  questionItemAnswers: { flexWrap: 'wrap', flexDirection: 'row', marginTop: 30 },
})

export const getDynamicStyle = ({ colors, top }: DynamicStyleProps) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background.primary,
      paddingTop: top,
    },
    progressBar: {
      backgroundColor: colors.input.background,
    },
    listView: {
      backgroundColor: colors.background.white,
    },
    questionItemView: {
      backgroundColor: colors.background.primary,
    },
    questionItemOptionSelectedText: {
      color: colors.font.white,
    },
  })
