import { plateGif } from '@/assets'
import { QuizCatalog } from '@/types'

export const quizCatalog: QuizCatalog = {
  data: [
    {
      id: '1',
      name: 'Угадай музыку!',
      description: 'Ответь на как можно больше вопросов за ограниченное время.',
      hasTimer: true,
      maxTimeSecond: 10,
      image: plateGif,
    },
  ],
}
