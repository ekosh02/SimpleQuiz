import { quizCatalog } from '@/data'
import { useTheme } from '@/hooks'
import { QuizPreview } from '@/types'
import { FlatList } from 'react-native'
import QuizCatalogItem from './components'
import { getDynamicStyle, styles } from './styles'

const QuizListTabScreen = () => {
  const { colors } = useTheme()
  const dynamicStyle = getDynamicStyle({ colors })

  const keyExtractor = (item: QuizPreview) => item.id

  const renderItem = ({ item }: { item: QuizPreview }) => <QuizCatalogItem quiz={item} />

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
