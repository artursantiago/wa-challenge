export function calculateScore(
  questions: QuizModule.Question[]
): QuizModule.Score {
  return questions.reduce(
    (score: QuizModule.Score, currentQuestion) => {
      if (currentQuestion.selectedAnswer === currentQuestion.correctAnswer) {
        return {
          ...score,
          correctAnswersTotal: score.correctAnswersTotal + 1,
          percentage: (score.correctAnswersTotal + 1) / questions.length
        }
      }
      if (
        !!currentQuestion.selectedAnswer &&
        currentQuestion.selectedAnswer !== currentQuestion.correctAnswer
      ) {
        return {
          ...score,
          wrongAnswersTotal: score.wrongAnswersTotal + 1
        }
      }
      return score
    },
    {
      correctAnswersTotal: 0,
      wrongAnswersTotal: 0,
      percentage: 0
    }
  )
}
