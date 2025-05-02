import { quizCatalog } from '@/data'
import { useTheme } from '@/hooks'
import { QuizPreview } from '@/types'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import { FlatList, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { getDynamicStyle, styles } from './styles'

const QuizListTabScreen = () => {
  const router = useRouter()
  const { colors } = useTheme()
  const dynamicStyle = getDynamicStyle({ colors })

  const handleNavigateQuiz = (item: QuizPreview) => {
    router.navigate({
      pathname: '/quizPreview',
      params: { id: item.id },
    })
  }
  const keyExtractor = (item: QuizPreview) => item.id

  const renderItem = ({ item }: { item: QuizPreview }) => (
    <RectButton style={[styles.itemView, dynamicStyle.itemView]} onPress={() => handleNavigateQuiz(item)}>
      <Image source={item.image} style={styles.itemImage} />
      <Text numberOfLines={5}>{item.name}</Text>
    </RectButton>
  )

  return (
    <FlatList
      data={quizCatalog.data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={[styles.listView, dynamicStyle.listView]}
    />
  )
}

export default QuizListTabScreen
