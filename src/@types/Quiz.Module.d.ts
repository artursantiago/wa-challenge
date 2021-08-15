declare namespace QuizModule {
  type Difficulty = 'hard' | 'medium' | 'easy'

  type Type = 'multiple' | 'boolean'

  type Score = {
    percentage: number // percentage
    correctAnswersTotal: number
    wrongAnswersTotal: number
  }

  type Question = {
    category: string
    type: Type
    difficulty: Difficulty
    question: string

    selectedAnswer?: string
    correctAnswer: string
    incorrectAnswers: string[]
  }

  type Quiz = {
    id: string
    questions: Question[]
    score: Score
    finishedAt?: string | Date
    startedAt: string | Date
  }
}
