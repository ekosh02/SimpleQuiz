import { plateGif } from '@/assets'
import { useTheme } from '@/hooks'
import { Image } from 'expo-image'
import { Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { getDynamicStyle, styles } from './styles'
import { QuestionViewItemProps } from './types'

const QuestionViewItem = ({ item, selectedAnswers, onPress }: QuestionViewItemProps) => {
  const { colors } = useTheme()

  const dynamicStyles = getDynamicStyle({ colors })
  const selectedOption = selectedAnswers[item.id]

  return (
    <View style={[styles.questionItemView, dynamicStyles.questionItemView]}>
      <Text style={styles.questionItemTitleText}>{item.questionText}</Text>
      <Image source={plateGif} style={styles.questionItemImage} />
      <View style={styles.questionItemAnswers}>
        {item.options.map((option, index) => {
          const isSelected = selectedOption === index
          const isCorrect = item.correctIndex === index

          let backgroundColor = colors.background.white

          const isWhiteText = typeof selectedOption === 'number' && (isCorrect || isSelected)

          if (typeof selectedOption === 'number') {
            if (isCorrect) {
              backgroundColor = colors.status.correct
            } else if (isSelected) {
              backgroundColor = colors.status.mistake
            }
          }

          return (
            <RectButton
              key={index}
              style={[styles.questionItemOptionButton, { backgroundColor }]}
              onPress={() => onPress(item, index)}
            >
              <Text style={[styles.questionItemOptionText, isWhiteText && styles.questionItemSelectOptionText]}>
                {option}
              </Text>
            </RectButton>
          )
        })}
      </View>
    </View>
  )
}

export default QuestionViewItem
