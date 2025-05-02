import { IsPressableProps, IndicatorColorProps } from './types'

export const getIsPressable = ({ enabled, isLoading }: IsPressableProps) => {
  return enabled && !isLoading
}

export const getIndicatorColor = ({ enabled }: IndicatorColorProps) => (enabled ? '#fff' : '#000')
