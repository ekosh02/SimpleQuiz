import { PrimaryButton } from '@/components'
import { musicQuiz } from '@/data'
import { useTheme } from '@/hooks'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from './styles'

const QuizResultScreen = () => {
  const router = useRouter()
  const { colors } = useTheme()
  const { top, bottom } = useSafeAreaInsets()
  const { selectedAnswers, quizQuestionsDataLength } = useLocalSearchParams()
  const quizQuestionsData = musicQuiz?.data.questions

  const parsedSelectedAnswers = selectedAnswers ? JSON.parse(selectedAnswers as any) : {}

  const correctAnswers = Object.keys(parsedSelectedAnswers).filter(
    (questionId) =>
      quizQuestionsData?.find((question) => question.id === questionId)?.correctIndex ===
      parsedSelectedAnswers[questionId],
  ).length

  const score = ((correctAnswers / Number(quizQuestionsDataLength)) * 100).toFixed(2)
  const scoreNumber = Math.floor(Number(score))
  const isPassed = scoreNumber > 50
  const resultText = isPassed ? 'Вы прошли тест' : 'Вы провалили тест'
  const backgroundColor = isPassed ? '#5db03f' : '#ba5d3d'

  const handleTest = () => {
    router.replace({
      pathname: '/quizPreview',
      params: { id: musicQuiz.data.id },
    })
  }

  return (
    <>
      <ScrollView style={[styles.container, { paddingTop: top + 10, backgroundColor }]}>
        <View style={styles.scoreContainer}>
          <View style={styles.scoreCircle}>
            <Text style={[styles.scoreText, { color: colors.font.white }]}>{`${scoreNumber}`}</Text>
          </View>
          <Text style={styles.resultText}>{'Ваш результат'}</Text>
          <Text style={styles.resultTitle}>{resultText}</Text>
        </View>
      </ScrollView>

      <View style={[styles.buttonContainer, { bottom: bottom + 10 }]}>
        <PrimaryButton
          text="Улучшать результат"
          viewStyle={styles.buttonView}
          buttonStyle={styles.greenButton}
          onPress={handleTest}
        />
        <PrimaryButton text="Выйти в меню" viewStyle={styles.buttonView} onPress={router.back} />
      </View>
    </>
  )
}

export default QuizResultScreen
