import { plateGif } from '@/assets'
import XButton from '@/components/buttons/XButton'
import { musicQuiz, quizCatalog } from '@/data'
import { useTheme } from '@/hooks'
import { QuizQuestion } from '@/types'
import { width } from '@/utils'
import { Audio } from 'expo-av'
import { Image } from 'expo-image'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useEffect, useRef, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { getDynamicStyle, styles } from './styles'

const QuizTestScreen = () => {
  const { id } = useLocalSearchParams()
  const router = useRouter()
  const { colors } = useTheme()
  const { top } = useSafeAreaInsets()

  const [currentIndex, setCurrentIndex] = useState(0)
  const soundRef = useRef<Audio.Sound | null>(null)
  const flatListRef = useRef<FlatList>(null)
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: number }>({})

  const quizData = quizCatalog.data.find((quiz) => quiz.id === id)
  const quizQuestionsData = musicQuiz?.data.questions
  const quizQuestionsDataLength = quizQuestionsData?.length

  const dynamicStyles = getDynamicStyle({ colors, top })

  const playAudio = async () => {
    if (!quizQuestionsData) return
    const question = quizQuestionsData[currentIndex]
    if (!question?.audio) return

    if (soundRef.current) {
      await soundRef.current.unloadAsync()
      soundRef.current = null
    }

    try {
      const { sound } = await Audio.Sound.createAsync(
        typeof question.audio === 'string' ? { uri: question.audio } : question.audio,
      )
      soundRef.current = sound
      await sound.playAsync()
    } catch (error) {
      console.warn('Audio error', error)
    }
  }

  const keyExtractor = (item: QuizQuestion) => item.id

  useEffect(() => {
    playAudio()

    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync()
      }
    }
  }, [currentIndex])

  const HeaderView = () => (
    <View style={styles.headerRow}>
      <XButton onPress={router.back} />
      <View style={styles.progressContainer}>
        {quizQuestionsData?.map((question) => {
          const selectedAnswer = selectedAnswers[question.id]
          const progressBarColor =
            selectedAnswer !== undefined ? (question.correctIndex === selectedAnswer ? '#2cbd08' : '#bd3508') : '#fff'

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

  const handleAnswer = (item: QuizQuestion, index: number) => {
    const selectedOption = selectedAnswers[item.id]
    if (selectedOption !== undefined) return

    setSelectedAnswers((prev) => {
      const newSelectedAnswers = { ...prev, [item.id]: index }
      setTimeout(() => {
        if (currentIndex + 1 < (quizQuestionsDataLength ?? 0)) {
          flatListRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true })
          setCurrentIndex((prev) => prev + 1)
        } else {
          router.replace({
            pathname: '/quizResult',
            params: {
              selectedAnswers: JSON.stringify(newSelectedAnswers),
              quizQuestionsDataLength,
            },
          })
        }
      }, 1000)
      return newSelectedAnswers
    })
  }

  const renderItem = ({ item }: { item: QuizQuestion }) => {
    const selectedOption = selectedAnswers[item.id]

    return (
      <View style={[styles.questionItemView, dynamicStyles.questionItemView]}>
        <Text style={styles.questionItemTitleText}>{item.questionText}</Text>
        <Image source={plateGif} style={{ marginTop: 30, width: width / 2, height: width / 2 }} />
        <View style={styles.questionItemAnswers}>
          {item.options.map((option, index) => {
            const isSelected = selectedOption === index
            const isCorrect = item.correctIndex === index

            let backgroundColor = colors.background.white
            let fontWeight = '500' as any
            let fontColor = '#000' as any

            if (selectedOption !== undefined) {
              if (isCorrect) {
                backgroundColor = '#2cbd08'
                fontWeight = '700'
                fontColor = '#fff'
              } else if (isSelected) {
                backgroundColor = '#bd3508'
                fontWeight = '700'
                fontColor = '#fff'
              }
            }

            return (
              <RectButton
                key={index}
                style={[styles.questionItemOptionButton, { backgroundColor }]}
                onPress={() => handleAnswer(item, index)}
              >
                <Text style={[styles.questionItemOptionText, { fontWeight, color: fontColor }]}>{option}</Text>
              </RectButton>
            )
          })}
        </View>
      </View>
    )
  }

  return (
    <View style={[styles.container, dynamicStyles.container]}>
      <HeaderView />
      <FlatList
        ref={flatListRef}
        data={quizQuestionsData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={[styles.listView, dynamicStyles.listView]}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width)
          setCurrentIndex(index)
        }}
      />
    </View>
  )
}

export default QuizTestScreen
