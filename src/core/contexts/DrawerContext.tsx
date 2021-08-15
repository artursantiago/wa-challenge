/**
 * React & libs
 */
import React, { createContext, useState } from 'react'

/**
 * Config, core, components, utils, assets, styles
 */
import history from 'config/routes/history'

import { storage } from 'utils/storage'

export const DrawerContext = createContext({} as DrawerContext.Data)

export function DrawerProvider({ children }: DrawerContext.Props): JSX.Element {
  const [previousQuizzes, setPreviousQuizzes] = useState<QuizModule.Quiz[]>(
    () => {
      return storage.get<QuizModule.Quiz[]>('quizzes') ?? []
    }
  )

  const [isOpen, setIsOpen] = useState(false)

  const clearQuizzes = (): void => {
    setPreviousQuizzes([])
  }

  const handleSelectQuiz = (quiz: QuizModule.Quiz): void => {
    setIsOpen(false)
    history.push(`/quiz/${quiz.id}`)
  }

  const updatePreviousQuizzes = (): void => {
    const newPreviousQuizzes = storage.get<QuizModule.Quiz[]>('quizzes')
    if (newPreviousQuizzes) {
      setPreviousQuizzes(newPreviousQuizzes)
    }
  }

  return (
    <DrawerContext.Provider
      value={{
        isOpen,
        setIsOpen,
        previousQuizzes,
        clearQuizzes,
        handleSelectQuiz,
        updatePreviousQuizzes
      }}
    >
      {children}
    </DrawerContext.Provider>
  )
}
