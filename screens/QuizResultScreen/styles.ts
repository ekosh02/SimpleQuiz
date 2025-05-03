import { width } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scoreContainer: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
