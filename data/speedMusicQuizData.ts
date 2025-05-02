import { QuizDetail } from '@/types'

export const speedMusicQuiz: QuizDetail = {
  data: {
    id: '1',
    title: 'Угадай музыку на скорость!',
    questions: [
      {
        id: '1',
        questionText: "Кто исполняет песню 'Billie Jean'?",
        options: ['Prince', 'Michael Jackson', 'Elvis Presley', 'Stevie Wonder'],
        correctIndex: 1,
        timeLimit: 15,
      },
      {
        id: '2',
        questionText: 'Какой трек был хитом группы Queen в 1975 году?',
        options: ['We Will Rock You', "Don't Stop Me Now", 'Bohemian Rhapsody', 'Radio Ga Ga'],
        correctIndex: 2,
        timeLimit: 15,
      },
      {
        id: '3',
        questionText: 'Как называется дебютный альбом группы Nirvana?',
        options: ['Nevermind', 'Bleach', 'In Utero', 'Incesticide'],
        correctIndex: 1,
        timeLimit: 15,
      },
      {
        id: '4',
        questionText: "Кто автор песни 'Rolling in the Deep'?",
        options: ['Adele', 'Amy Winehouse', 'Sia', 'Lana Del Rey'],
        correctIndex: 0,
        timeLimit: 15,
      },
      {
        id: '5',
        questionText: "Из какой видеоигры трек 'Megalovania'?",
        options: ['Undertale', 'Minecraft', 'Skyrim', 'Celeste'],
        correctIndex: 0,
        timeLimit: 15,
      },
    ],
  },
}
