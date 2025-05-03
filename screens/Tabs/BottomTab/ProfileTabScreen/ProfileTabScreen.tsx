import { useTheme } from '@/hooks'
import { Text, View } from 'react-native'

const ProfileTabScreen = () => {
  const { colors } = useTheme()
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background.primary }}
    >
      <Text>Profile</Text>
    </View>
  )
}

export default ProfileTabScreen
