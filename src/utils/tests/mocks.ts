export const quizResetedState: QuizModule.Quiz = {
  id: '',
  questions: [],
  score: {
    correctAnswersTotal: 0,
    percentage: 0,
    wrongAnswersTotal: 0
  },
  startedAt: ''
}

export const quizInitalState: QuizModule.Quiz = {
  id: '',
  questions: [
    {
      category: 'Entertainment: Video Games',
      type: 'boolean',
      difficulty: 'easy',
      question:
        'The ghosts in &quot;Pac-Man&quot; and &quot;Ms. Pac-Man&quot; have completely different behavior.',
      correctAnswer: 'True',
      incorrectAnswers: ['False']
    },
    {
      category: 'Entertainment: Video Games',
      type: 'boolean',
      difficulty: 'easy',
      question: 'The ghosts in Pacman have completely different behavior.',
      correctAnswer: 'True',
      incorrectAnswers: ['False'],
      selectedAnswer: 'False'
    }
  ],
  score: {
    correctAnswersTotal: 0,
    percentage: 0.5,
    wrongAnswersTotal: 1
  },
  startedAt: '2021-08-16T12:07:52.525Z'
}

export const quizFinishedState: QuizModule.Quiz = {
  id: '1629115687311',
  questions: [
    {
      category: 'Entertainment: Video Games',
      type: 'boolean',
      difficulty: 'easy',
      question:
        'The ghosts in &quot;Pac-Man&quot; and &quot;Ms. Pac-Man&quot; have completely different behavior.',
      correctAnswer: 'True',
      incorrectAnswers: ['False'],
      selectedAnswer: 'True'
    }
  ],
  score: { correctAnswersTotal: 1, wrongAnswersTotal: 0, percentage: 1 },
  startedAt: '2021-08-16T12:07:52.525Z',
  finishedAt: '2021-08-16T12:08:07.311Z'
}

export const question: QuizModule.Question = {
  category: 'Entertainment: Video Games',
  type: 'boolean',
  difficulty: 'easy',
  question:
    'The ghosts in &quot;Pac-Man&quot; and &quot;Ms. Pac-Man&quot; have completely different behavior.',
  correctAnswer: 'True',
  incorrectAnswers: ['False']
}
