import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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
})
