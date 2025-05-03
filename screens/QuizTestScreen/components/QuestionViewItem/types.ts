import { Colors, QuizQuestion } from '@/types'

export type DynamicStyleProps = {
  colors: Colors
}

export type QuestionViewItemProps = {
  item: QuizQuestion
  selectedAnswers: {
    [key: string]: number
  }
  onPress: (item: QuizQuestion, index: number) => void
}
