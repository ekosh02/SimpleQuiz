import { musicQuiz } from '@/data'
import { useTheme } from '@/hooks'
import { QuizQuestion } from '@/types'
import { width } from '@/utils'
import { Audio } from 'expo-av'
import { useRouter } from 'expo-router'
import { useEffect, useRef, useState } from 'react'
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HeaderView, QuestionViewItem } from './components'
import { getDynamicStyle, styles } from './styles'

const QuizTestScreen = () => {
  const router = useRouter()
  const { colors } = useTheme()
  const { top } = useSafeAreaInsets()

  const [currentIndex, setCurrentIndex] = useState(0)
  const soundRef = useRef<Audio.Sound | null>(null)
  const flatListRef = useRef<FlatList>(null)
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: number }>({})

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

  const handleMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width)
    setCurrentIndex(index)
  }

  useEffect(() => {
    playAudio()

    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync()
      }
    }
  }, [currentIndex])

  const renderItem = ({ item }: { item: QuizQuestion }) => (
    <QuestionViewItem item={item} selectedAnswers={selectedAnswers} onPress={handleAnswer} />
  )

  return (
    <View style={[styles.container, dynamicStyles.container]}>
      <HeaderView selectedAnswers={selectedAnswers} currentIndex={currentIndex} />
      <FlatList
        ref={flatListRef}
        data={quizQuestionsData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={[styles.listView, dynamicStyles.listView]}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleMomentumScrollEnd}
      />
    </View>
  )
}

export default QuizTestScreen
