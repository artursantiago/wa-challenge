/**
 * React & libs
 */
import React, { createContext, useState } from 'react'

/**
 * Config, core, components, utils, assets, styles
 */
import history from 'config/routes/history'
import { useQuiz } from 'core/hooks'

import { storage } from 'utils/storage'

export const DrawerContext = createContext({} as DrawerContext.Data)

export function DrawerProvider({ children }: DrawerContext.Props): JSX.Element {
  const { setQuiz } = useQuiz()

  const [savedQuizzes, setSavedQuizzes] = useState<QuizModule.Quiz[]>(() => {
    return storage.get<QuizModule.Quiz[]>('quizzes') ?? []
  })

  const [isOpen, setIsOpen] = useState(false)

  const clearQuizzes = (): void => {
    setSavedQuizzes([])
  }

  const handleSelectQuiz = (quiz: QuizModule.Quiz): void => {
    setQuiz(quiz)
    setIsOpen(false)
    history.push('/quiz')
  }

  return (
    <DrawerContext.Provider
      value={{
        isOpen,
        setIsOpen,
        savedQuizzes,
        clearQuizzes,
        handleSelectQuiz
      }}
    >
      {children}
    </DrawerContext.Provider>
  )
}
