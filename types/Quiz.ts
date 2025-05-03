export type QuizPreview = {
  id: string
  name: string
  description: string
  hasTimer: boolean
  maxTimeSecond: number
  image: string | number
}

export type QuizCatalog = {
  data: QuizPreview[]
}

export type QuizQuestion = {
  id: string
  questionText: string
  options: string[]
  correctIndex: number
  audio: string | number
}

export type QuizDetail = {
  data: {
    id: string
    title: string
    questions: QuizQuestion[]
  }
}
