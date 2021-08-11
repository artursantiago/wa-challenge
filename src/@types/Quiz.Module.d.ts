declare namespace QuizModule {
  type Difficulty = 'hard' | 'medium' | 'easy'

  type Type = 'multiple' | 'boolean'

  type Question = {
    category: string
    type: Type
    difficulty: Difficulty
    question: string

    // When type equal to boolean, correctAnswer will be 'False' or 'True
    correctAnswer: string
    incorrectAnswers: string[]
  }
}
