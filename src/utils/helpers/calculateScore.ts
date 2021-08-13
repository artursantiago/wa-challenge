export function calculateScore(
  questions: QuizModule.Question[]
): QuizModule.Score {
  const correctAnswersTotal = questions.reduce((total, currentQuestion) => {
    if (currentQuestion.selectedAnswer === currentQuestion.correctAnswer)
      return total + 1
    return total
  }, 0)
  return {
    correctAnswersTotal,
    percentage: correctAnswersTotal / questions.length
  }
}
