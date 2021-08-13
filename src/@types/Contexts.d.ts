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
    score?: QuizModule.Score
    loading: boolean
    handleStartQuiz: (amount: number) => Promise<void>
    handleSubmitQuiz: (questions: QuizModule.Question[]) => void
    handleCancelQuiz: () => void
  }

  type Props = {
    children: React.ReactNode
  }
}
