import { width } from '@/utils'
import { StyleSheet } from 'react-native'
import { DynamicStylesProps } from './types'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scoreContainer: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: '500',
    color: '#fff',
  },
  buttonContainer: {
    position: 'absolute',
    width: width - 28,
    borderRadius: 30,
    padding: 13,
    backgroundColor: '#fff',
    marginHorizontal: 13,
    gap: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonView: {
    borderRadius: 30,
  },
  greenButton: {
    backgroundColor: '#248c2b',
    borderRadius: 30,
  },
  resultTitle: {
    marginTop: 20,
    fontSize: 20,
    color: '#fff',
    fontWeight: '500',
  },
})

export const getDynamicStyles = ({ bottom, top, colors, isPassed }: DynamicStylesProps) => {
  const safePaddingTop = top + 10
  const safePaddingBottom = bottom + 10
  const containerBackgroundColor = isPassed ? '#5db03f' : '#ba5d3d'

  return StyleSheet.create({
    container: { paddingTop: safePaddingTop, backgroundColor: containerBackgroundColor },
    buttonContainer: { bottom: safePaddingBottom },
    scoreText: { color: colors.font.white },
  })
}
