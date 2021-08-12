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
    questions: QuizModule.Question[]
    finished: boolean
    score?: number
    handleStartQuiz: (amount: number) => Promise<void>
    handleSubmitQuiz: () => void
  }

  type Props = {
    children: React.ReactNode
  }
}
