import XButton from '@/components/buttons/XButton'
import { musicQuiz } from '@/data'
import { useTheme } from '@/hooks'
import { useRouter } from 'expo-router'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { HeaderViewProps } from './types'

const HeaderView = ({ selectedAnswers, currentIndex }: HeaderViewProps) => {
  const { colors } = useTheme()
  const router = useRouter()

  const quizQuestionsData = musicQuiz?.data.questions
  const quizQuestionsDataLength = quizQuestionsData?.length

  return (
    <View style={styles.headerRow}>
      <XButton onPress={router.back} />
      <View style={styles.progressContainer}>
        {quizQuestionsData?.map((question) => {
          const selectedAnswer = selectedAnswers[question.id]

          let progressBarColor = '#fff'

          if (typeof selectedAnswer === 'number') {
            const isCorrect = selectedAnswer === question.correctIndex
            progressBarColor = isCorrect ? colors.status.correct : colors.status.mistake
          }

          return (
            <View key={question.id} style={styles.progressItem}>
              <View style={[styles.progressBar, { backgroundColor: progressBarColor }]} />
            </View>
          )
        })}
      </View>
      <Text style={styles.progressText}>{`${currentIndex + 1}/${quizQuestionsDataLength}`}</Text>
    </View>
  )
}

export default HeaderView
