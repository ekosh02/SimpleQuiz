import { DarkTheme, DefaultTheme } from '@/constants'

const useTheme = () => {
  const isDark = false

  return isDark ? DarkTheme : DefaultTheme
}

export default useTheme
