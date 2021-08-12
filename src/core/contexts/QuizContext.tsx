/**
 * React & libs
 */
import { api } from 'core/api'
import React, { createContext, useState } from 'react'

export const QuizContext = createContext({} as QuizContext.Data)

export function QuizProvider({ children }: QuizContext.Props): JSX.Element {
  const [questions, setQuestions] = useState<QuizModule.Question[]>([])
  const [score, setScore] = useState<number>()
  const [finished, setFinished] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleStartQuiz = async (amount: number): Promise<void> => {
    setLoading(true)

    setQuestions([])
    const { results, response_code } = await api.fetchQuestions({ amount })

    if (
      response_code !== 0 ||
      response_code === undefined ||
      results === undefined
    ) {
      setLoading(false)
      return
    }

    const newQuestions: QuizModule.Question[] = results.map((question) => ({
      ...question,
      correctAnswer: question.correct_answer,
      incorrectAnswers: question.incorrect_answers
    }))

    setQuestions(newQuestions)

    setLoading(false)
  }

  const handleSubmitQuiz = (): void => {
    setQuestions([])
    setScore(undefined)
    setFinished(false)
  }

  const handleCancelQuiz = (): void => {
    setQuestions([])
    setScore(undefined)
    setFinished(false)
  }

  return (
    <QuizContext.Provider
      value={{
        questions,
        finished,
        score,
        loading,
        handleStartQuiz,
        handleSubmitQuiz,
        handleCancelQuiz
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}
