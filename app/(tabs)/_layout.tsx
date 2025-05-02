import { ProfileIcon, TaskIcon } from '@/assets'
import { useTheme } from '@/hooks'
import { Tabs } from 'expo-router'

const TabLayout = () => {
  const { colors } = useTheme()
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="quizListTab"
        options={{
          title: 'Quiz Tab',
          tabBarIcon: ({ color, size, focused }) => <TaskIcon active={focused} />,
        }}
      />
      <Tabs.Screen
        name="profileTab"
        options={{
          title: 'Profile Tab',
          tabBarIcon: ({ color, size, focused }) => <ProfileIcon active={focused} />,
        }}
      />
    </Tabs>
  )
}

export default TabLayout
