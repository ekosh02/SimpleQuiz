import { BorderlessButton } from 'react-native-gesture-handler'
import { XButtonProps } from './types'
import { XIcon } from '@/assets'
import { getDynamicStyles, styles } from './styles'
import { useTheme } from '@/hooks'

const XButton = ({ style, ...props }: XButtonProps) => {
  const { colors } = useTheme()
  const dynamicStyles = getDynamicStyles({ colors })

  return (
    <BorderlessButton style={[styles.view, dynamicStyles.view, style]} {...props}>
      <XIcon />
    </BorderlessButton>
  )
}

export default XButton
