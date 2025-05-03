import { Path, Svg } from 'react-native-svg'

const PLayIcon = ({ color = '#404040', size = '12' }) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.085 8.277l10.578 6.028a1.933 1.933 0 010 3.39l-10.578 6.028C11.722 24.5 10 23.552 10 22.027V9.973c0-1.525 1.722-2.473 3.085-1.696z"
      fill="#65A46A"
    />
  </Svg>
)

export default PLayIcon
