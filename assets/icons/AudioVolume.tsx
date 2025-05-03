import React from 'react'
import { Path, Svg } from 'react-native-svg'
const AudioVolume = ({ color = '#65A46A', size = '35' }) => (
  <Svg width={size} height={size} viewBox="0 0 35 35" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.4868 12.4596H5.05591C4.2585 12.4596 3.61133 13.1068 3.61133 13.9042V20.766C3.61133 21.5634 4.2585 22.2106 5.05591 22.2106H8.4868L14.2348 27.0803C15.1738 27.8762 16.6126 27.2088 16.6126 25.978V8.69216C16.6126 7.46138 15.1723 6.79398 14.2348 7.58995L8.4868 12.4596Z"
      fill={color}
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M22.4443 23.0815C24.1229 22.0385 25.2801 19.8687 25.2801 17.3422C25.2801 14.8156 24.1229 12.6444 22.4443 11.5884"
      stroke={color}
      stroke-width="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M26.7318 27.5409C29.3436 25.2946 31.0584 21.5675 31.0584 17.3392C31.0584 13.1052 29.3407 9.37525 26.7246 7.13037"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default AudioVolume
