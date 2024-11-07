// TODO [] - Remover este mock
import type { QuestionList } from '../QuestionsForm/QuestionsForm.types'

export const mockedQuestions: QuestionList[] = [
  {
    text: 'Quem Descobriu o Brazil',
    correctQuestion: 2,
    options: [
      { text: 'Mario' },
      { text: 'Seu Luiz' },
      { text: 'Cabral' },
      { text: 'Fulana' },
    ],
  },

  {
    text: '1 + 1',
    correctQuestion: 0,
    options: [{ text: '2' }, { text: '3' }, { text: '4' }, { text: '10' }],
  },

  {
    text: 'Cor do céu',
    correctQuestion: 3,
    options: [
      { text: 'Amarelo' },
      { text: 'Verde' },
      { text: 'Vermelho' },
      { text: 'Azul' },
    ],
  },

  {
    text: 'Quanta luas tem a terra',
    correctQuestion: 1,
    options: [{ text: '20' }, { text: '1' }, { text: '0' }, { text: '2' }],
  },
]
