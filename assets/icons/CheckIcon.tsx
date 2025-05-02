import { useTheme } from '@/hooks'
import { Colors } from '@/types'
import { StyleSheet, View } from 'react-native'
import Svg, { Path, SvgProps } from 'react-native-svg'

interface CheckIconProps extends SvgProps {
  isCheck?: boolean
  color?: string
  size?: number
}

type DynamicStylesProps = {
  colors: Colors
  size: number
  isCheck: boolean
}

const CheckIcon = ({ isCheck = false, color = '#fff', size = 22, ...props }: CheckIconProps) => {
  const aspectRatio = 16 / 12
  const width = size / 1.3
  const height = size / 1.3 / aspectRatio

  const { colors } = useTheme()

  const dynamicStyles = getDynamicStyles({ colors, size, isCheck })

  return (
    <View style={[styles.view, dynamicStyles.view]}>
      {isCheck && (
        <Svg width={width} height={height} viewBox="0 0 16 12" fill="none" {...props}>
          <Path
            d="M14.887.433a1.459 1.459 0 00-2.056.161L6.549 7.943 3.17 5.12A1.334 1.334 0 00.988 6.26a1.33 1.33 0 00.473.903l4.53 3.781a1.326 1.326 0 001.014.297 1.456 1.456 0 00.997-.507l7.048-8.246a1.458 1.458 0 00-.162-2.057"
            fill={colors.icon.background}
          />
        </Svg>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
})

export const getDynamicStyles = ({ colors, size, isCheck }: DynamicStylesProps) => {
  const viewBorderColor = isCheck ? undefined : colors.icon.border
  const viewBackgroundColor = isCheck ? colors.primary : 'transparent'
  const borderWidthColor = isCheck ? 0 : 1

  return StyleSheet.create({
    view: {
      width: size,
      height: size,
      borderColor: viewBorderColor,
      backgroundColor: viewBackgroundColor,
      borderWidth: borderWidthColor,
    },
  })
}

export default CheckIcon
