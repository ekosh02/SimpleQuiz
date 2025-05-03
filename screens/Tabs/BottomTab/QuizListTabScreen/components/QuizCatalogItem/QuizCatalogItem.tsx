import { useTheme } from '@/hooks'
import { QuizPreview } from '@/types'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import { Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { getDynamicStyle, styles } from './styles'

const QuizCatalogItem = ({ quiz }: { quiz: QuizPreview }) => {
  const router = useRouter()

  const { colors } = useTheme()
  const dynamicStyle = getDynamicStyle({ colors })

  const handleNavigateQuiz = (quiz: QuizPreview) => {
    router.navigate({
      pathname: '/quizPreview',
      params: { id: quiz.id },
    })
  }

  return (
    <RectButton style={[styles.itemView, dynamicStyle.itemView]} onPress={() => handleNavigateQuiz(quiz)}>
      <Image source={quiz.image} style={styles.itemImage} />
      <Text numberOfLines={5}>{quiz.name}</Text>
    </RectButton>
  )
}

export default QuizCatalogItem
