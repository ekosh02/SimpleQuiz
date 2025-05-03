import { QuizDetail } from '@/types'

export const musicQuiz: QuizDetail = {
  data: {
    id: '1',
    title: 'Угадай мызыку!',
    questions: [
      {
        id: '1',
        questionText: 'Кто исполняет эту песню?',
        audio: require('./music/APlaceForMyHead.mp3'),
        options: ['Linkin Park', 'Limp Bizkit', 'Papa Roach', 'Slipknot'],
        correctIndex: 0,
      },
      {
        id: '2',
        questionText: 'Назови исполнителя этого трека:',
        audio: require('./music/ComeAsYouAre.mp3'),
        options: ['Nirvana', 'Pearl Jam', 'Soundgarden', 'Alice in Chains'],
        correctIndex: 0,
      },
      {
        id: '3',
        questionText: 'Как называется эта песня группы The Beatles?',
        audio: require('./music/ComeTogether.mp3'),
        options: ['Help!', 'Come Together', 'Hey Jude', 'Let It Be'],
        correctIndex: 1,
      },
      {
        id: '4',
        questionText: 'Кто исполняет эту балладу?',
        audio: require('./music/NothingElseMatters.mp3'),
        options: ['Metallica', 'AC/DC', 'Scorpions', 'Guns N’ Roses'],
        correctIndex: 0,
      },
      {
        id: '5',
        questionText: 'Кто поёт эту песню?',
        audio: require('./music/Zombie.mp3'),
        options: ['The Cranberries', 'No Doubt', 'Evanescence', 'Paramore'],
        correctIndex: 0,
      },
    ],
  },
}
