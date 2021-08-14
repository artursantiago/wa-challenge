/**
 * React & libs
 */
import React, { createContext, useState } from 'react'

/**
 * Config, core, components, utils, assets, styles
 */
import { api } from 'core/api'

import { calculateScore } from 'utils/helpers'
import { storage } from 'utils/storage'

export const QuizContext = createContext({} as QuizContext.Data)

export function QuizProvider({ children }: QuizContext.Props): JSX.Element {
  const [quiz, setQuiz] = useState<QuizModule.Quiz>({} as QuizModule.Quiz)
  const [loading, setLoading] = useState(false)

  const handleStartQuiz = async (amount: number): Promise<void> => {
    setLoading(true)

    setQuiz({
      id: '',
      questions: [],
      score: {
        percentage: 0,
        correctAnswersTotal: 0
      },
      startedAt: new Date()
    })
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

    setQuiz((previous) => ({
      ...previous,
      questions: newQuestions
    }))
    setLoading(false)
  }

  const handleSubmitQuiz = (
    submittedQuestions: QuizModule.Question[]
  ): void => {
    const newQuiz = {
      ...quiz,
      id: String(new Date().getTime()),
      score: calculateScore(submittedQuestions),
      questions: submittedQuestions,
      finishedAt: new Date()
    }
    setQuiz(newQuiz)

    const savedQuizzes = storage.get<QuizModule.Quiz[]>('quizzes')
    const newQuizzes = savedQuizzes?.length
      ? [...savedQuizzes, newQuiz]
      : [newQuiz]
    storage.save<QuizModule.Quiz[]>('quizzes', newQuizzes)
  }

  const resetQuiz = (): void => {
    setQuiz({} as QuizModule.Quiz)
  }

  return (
    <QuizContext.Provider
      value={{
        quiz,
        setQuiz,
        loading,
        handleStartQuiz,
        handleSubmitQuiz,
        resetQuiz
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}
