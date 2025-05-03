import { PrimaryButton } from '@/components'
import { quizCatalog } from '@/data'
import { useTheme } from '@/hooks'
import { Image } from 'expo-image'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { getDynamicStyle, styles } from './styles'

const QuizPreviewScreen = () => {
  const { id } = useLocalSearchParams()
  const router = useRouter()
  const { colors } = useTheme()
  const { bottom, top } = useSafeAreaInsets()

  const quiz = quizCatalog.data.find((item) => item.id === id)
  const dynamicStyle = getDynamicStyle({ colors, bottom, top })

  const handleStart = () => router.navigate({ pathname: '/quizTest', params: { id: id } })

  return (
    <>
      <ScrollView style={[styles.scrollView, dynamicStyle.scrollView]}>
        <View style={styles.view}>
          <Image source={quiz?.image} style={styles.image} />
          <Text style={[styles.title, dynamicStyle.title]}>{quiz?.name}</Text>
          <Text style={[styles.description, dynamicStyle.description]}>{quiz?.description}</Text>
        </View>
      </ScrollView>
      <View style={[styles.buttonContainer, dynamicStyle.buttonContainer]}>
        <PrimaryButton text="Начать" onPress={handleStart} />
      </View>
    </>
  )
}

export default QuizPreviewScreen
