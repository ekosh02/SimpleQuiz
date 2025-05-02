import { useTheme } from '@/hooks'
import Svg, { Path, SvgProps } from 'react-native-svg'

const ArrowBottomIcon = (props: SvgProps) => {
  const { colors } = useTheme()
  return (
    <Svg width={11} height={7} viewBox="0 0 11 7" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.51.89a.762.762 0 010 1.077L5.94 6.54a.762.762 0 01-1.078 0L.29 1.967A.762.762 0 011.367.89L5.4 4.922 9.433.89a.762.762 0 011.077 0z"
        fill={colors.icon.primary}
      />
    </Svg>
  )
}

export default ArrowBottomIcon
