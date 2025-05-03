import { useTheme } from '@/hooks'
import React, { useEffect, useRef, useState } from 'react'
import { Animated, Text, View } from 'react-native'
import { getDynamicStyles, styles } from './styles'
import { ScoreViewProps } from './types'

const ScoreView = ({ score }: ScoreViewProps) => {
  const { colors } = useTheme()
  const dynamicStyles = getDynamicStyles({ colors })

  const animatedValue = useRef(new Animated.Value(0)).current
  const [displayScore, setDisplayScore] = useState(0)

  useEffect(() => {
    const listenerId = animatedValue.addListener(({ value }) => {
      setDisplayScore(Math.round(value))
    })

    Animated.timing(animatedValue, {
      toValue: score,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      animatedValue.removeListener(listenerId)
    })

    return () => {
      animatedValue.removeListener(listenerId)
    }
  }, [score])

  return (
    <View style={styles.scoreCircle}>
      <Text style={[styles.scoreText, dynamicStyles.scoreText]}>{displayScore}</Text>
    </View>
  )
}

export default ScoreView
