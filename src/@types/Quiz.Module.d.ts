declare namespace QuizModule {
  type Difficulty = 'hard' | 'medium' | 'easy'

  type Type = 'multiple' | 'boolean'

  type Question = {
    category: string
    type: Type
    difficulty: Difficulty
    question: string

    selectedAnswer?: string
    correctAnswer: string
    incorrectAnswers: string[]
  }
}
