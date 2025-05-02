import { StyleSheet } from 'react-native'
import { DynamicStyleProps } from './types'

export const styles = StyleSheet.create({
  view: {
    alignSelf: 'stretch',
    borderRadius: 16,
  },
  buttonView: {
    paddingVertical: 8,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  loadingView: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textRowView: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  textsColumnView: {
    gap: 4,
    width: '80%',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
  subtext: {
    fontSize: 14,
    fontWeight: '400',
  },
})

export const getDynamicStyle = ({ subtext, isLoading }: DynamicStyleProps) => {
  const buttonViewPaddingVertical = Boolean(subtext) ? 10 : 18
  const textsColumnOpacity = isLoading ? 0 : 1

  return StyleSheet.create({
    buttonView: {
      paddingVertical: buttonViewPaddingVertical,
    },
    textsColumnView: {
      opacity: textsColumnOpacity,
    },
  })
}
