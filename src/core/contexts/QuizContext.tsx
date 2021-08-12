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

  const handleStartQuiz = async (amount: number): Promise<void> => {
    const { results } = await api.fetchQuestions({ amount })

    const newQuestions: QuizModule.Question[] = results.map((question) => ({
      ...question,
      correctAnswer: question.correct_answer,
      incorrectAnswers: question.incorrect_answers
    }))

    setQuestions(newQuestions)
    console.log(newQuestions)
  }

  const handleSubmitQuiz = (): void => {
    setQuestions([])
  }

  return (
    <QuizContext.Provider
      value={{
        questions,
        finished,
        score,
        handleStartQuiz,
        handleSubmitQuiz
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}
