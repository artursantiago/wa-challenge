/**
 * React & libs
 */
import React, { createContext, useEffect, useState } from 'react'

/**
 * Config, core, components, utils, assets, styles
 */
import { api } from 'core/api'
import { useDrawer } from 'core/hooks'

import { calculateScore } from 'utils/helpers'
import { storage } from 'utils/storage'

export const QuizContext = createContext({} as QuizContext.Data)

const generateQuizInitalValue = (): QuizModule.Quiz => ({
  id: '',
  questions: [],
  score: {
    correctAnswersTotal: 0,
    percentage: 0
  },
  startedAt: new Date()
})

export function QuizProvider({ children }: QuizContext.Props): JSX.Element {
  const { previousQuizzes, updatePreviousQuizzes } = useDrawer()
  const [quiz, setQuiz] = useState<QuizModule.Quiz>(generateQuizInitalValue())
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

    const newQuizzes = previousQuizzes?.length
      ? [...previousQuizzes, newQuiz]
      : [newQuiz]
    storage.save<QuizModule.Quiz[]>('quizzes', newQuizzes)
    updatePreviousQuizzes()
  }

  const resetQuiz = (): void => {
    setQuiz(generateQuizInitalValue())
  }

  useEffect(() => {
    setQuiz((prev) => ({
      ...prev,
      score: calculateScore(prev.questions)
    }))
  }, [quiz.questions])

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
