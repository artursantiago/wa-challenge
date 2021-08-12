import { useContext } from 'react'
import { QuizContext } from 'core/contexts/QuizContext'

export function useQuiz(): QuizContext.Data {
  const context = useContext(QuizContext)

  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider')
  }

  return context
}
