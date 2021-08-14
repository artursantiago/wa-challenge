declare namespace ThemeContext {
  type Theme = 'dark' | 'light'
  type Data = {
    theme: Theme
    setTheme: (theme: Theme) => void
  }
  type Props = {
    children: React.ReactNode
  }
}
declare namespace QuizContext {
  type Data = {
    quiz: QuizModule.Quiz
    loading: boolean
    handleStartQuiz: (amount: number) => void
    handleSubmitQuiz: (submittedQuestions: QuizModule.Question[]) => void
    setQuiz: React.Dispatch<React.SetStateAction<QuizModule.Quiz>>
    resetQuiz: () => void
  }

  type Props = {
    children: React.ReactNode
  }
}

declare namespace DrawerContext {
  type Data = {
    isOpen: boolean
    savedQuizzes: QuizModule.Quiz[]
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    clearQuizzes: () => void
    handleSelectQuiz: (quiz: QuizModule.Quiz) => void
  }

  type Props = {
    children: React.ReactNode
  }
}
