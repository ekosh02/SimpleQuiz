import { width } from '@/utils'
import { StyleSheet } from 'react-native'
import { DynamicStylesProps } from './types'

export const styles = StyleSheet.create({
  scoreCircle: {
    marginTop: 30,
    width: width / 2,
    height: width / 2,
    borderRadius: width / 4,
    borderWidth: 6,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 64,
    fontWeight: '700',
  },
})

export const getDynamicStyles = ({ colors }: DynamicStylesProps) => {
  return StyleSheet.create({
    scoreText: { color: colors.font.white },
  })
}
