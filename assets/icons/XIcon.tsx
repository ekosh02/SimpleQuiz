import { useTheme } from '@/hooks'
import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

function XIcon({ ...props }: SvgProps) {
  const { colors } = useTheme()
  return (
    <Svg width={14} height={14} viewBox="0 0 14 14" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.756.578A.833.833 0 10.577 1.756L5.822 7 .577 12.244a.833.833 0 001.179 1.179L7 8.179l5.244 5.244a.833.833 0 001.179-1.179L8.179 7l5.244-5.244A.833.833 0 1012.244.578L7 5.822 1.756.578z"
        fill={colors.icon.primary}
      />
    </Svg>
  )
}

export default XIcon
