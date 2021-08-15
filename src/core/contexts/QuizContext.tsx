/**
 * React & libs
 */
import React, { createContext, useEffect, useState, useCallback } from 'react'

/**
 * Config, core, components, utils, assets, styles
 */
import history from 'config/routes/history'
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
    wrongAnswersTotal: 0,
    percentage: 0
  },
  startedAt: new Date()
})

export function QuizProvider({ children }: QuizContext.Props): JSX.Element {
  const { previousQuizzes: previousQuizzesDrawer, updatePreviousQuizzes } =
    useDrawer()
  const [quiz, setQuiz] = useState<QuizModule.Quiz>(generateQuizInitalValue())
  const [loading, setLoading] = useState(false)

  const handleStartQuiz = useCallback(async (amount: number): Promise<void> => {
    setLoading(true)

    setQuiz(generateQuizInitalValue())
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
  }, [])

  const handleSubmitQuiz = useCallback(
    (submittedQuestions: QuizModule.Question[]): void => {
      const newQuiz = {
        ...quiz,
        id: String(new Date().getTime()),
        score: calculateScore(submittedQuestions),
        questions: submittedQuestions,
        finishedAt: new Date()
      }
      setQuiz(newQuiz)

      const newQuizzes = previousQuizzesDrawer?.length
        ? [...previousQuizzesDrawer, newQuiz]
        : [newQuiz]
      storage.save<QuizModule.Quiz[]>('quizzes', newQuizzes)
      updatePreviousQuizzes()

      history.push(`/quiz/${newQuiz.id}`)
    },
    [previousQuizzesDrawer, quiz, updatePreviousQuizzes]
  )

  const resetQuiz = (): void => {
    setQuiz(generateQuizInitalValue())
  }

  const getQuizFromStorage = useCallback(
    async (quizId: string): Promise<void> => {
      setLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 500))

      const previousQuizzes = storage.get<QuizModule.Quiz[]>('quizzes')

      const foundQuiz = previousQuizzes?.find(
        (previousQuiz) => previousQuiz.id === quizId
      )

      if (!foundQuiz) {
        setLoading(false)
        history.replace('/')
        return
      }

      setQuiz(foundQuiz)
      setLoading(false)
    },
    []
  )

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
        resetQuiz,
        getQuizFromStorage
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}
