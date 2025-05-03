import { PrimaryButton, ScoreView } from '@/components'
import { musicQuiz } from '@/data'
import { useTheme } from '@/hooks'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { getDynamicStyles, styles } from './styles'

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

  const dynamicStyles = getDynamicStyles({ top, bottom, colors, isPassed })

  const handleTest = () => {
    router.replace({
      pathname: '/quizPreview',
      params: { id: musicQuiz.data.id },
    })
  }

  return (
    <>
      <ScrollView style={[styles.container, dynamicStyles.container]}>
        <View style={styles.scoreContainer}>
          <ScoreView score={scoreNumber} />
          <Text style={styles.resultText}>{'Ваш результат'}</Text>
          <Text style={styles.resultTitle}>{resultText}</Text>
        </View>
      </ScrollView>

      <View style={[styles.buttonContainer, dynamicStyles.buttonContainer]}>
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
