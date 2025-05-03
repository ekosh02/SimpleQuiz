import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const PauseIcon = ({ ...props }) => {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.333 24a2 2 0 01-2-2V10a2 2 0 014 0v12a2 2 0 01-2 2zM10.667 24a2 2 0 01-2-2V10a2 2 0 014 0v12a2 2 0 01-2 2z"
        fill="#65A46A"
      />
    </Svg>
  )
}

export default PauseIcon
