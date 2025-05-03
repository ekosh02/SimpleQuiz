import { width } from '@/utils'
import { StyleSheet } from 'react-native'
import { DynamicStyleProps } from './types'

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  view: {
    alignItems: 'center',
    paddingHorizontal: 13,
  },
  image: {
    width: width / 2,
    height: width / 2,
    marginTop: 20,
  },
  title: {
    marginTop: 24,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  description: {
    marginTop: 13,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    paddingTop: 16,
    paddingHorizontal: 13,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
})

export const getDynamicStyle = ({ colors, bottom, top }: DynamicStyleProps) =>
  StyleSheet.create({
    scrollView: {
      backgroundColor: colors.background.primary,
      paddingTop: top + 20,
    },
    title: {
      color: colors.font.primary,
    },
    description: {
      color: colors.font.gray,
    },
    buttonContainer: {
      paddingBottom: bottom + 16,
      backgroundColor: colors.background.primary,
    },
  })
